import { create } from 'zustand';
import { getProducts, ProductType } from '@/entities/product';
import { getErrorMessage } from '@/shared/api';

type ProductsStore = {
  loading: boolean;
  error: string | null;
  products: ProductType[] | null;
  fetchProducts: () => void;
};

export const useProductsStore = create<ProductsStore>((set, get) => ({
  loading: true,
  error: null,
  products: [],

  fetchProducts: async () => {
    if (!get().products?.length) {
      set({ loading: true, error: null });
      try {
        const products = await getProducts();
        set({ products });
      } catch (err) {
        const errorMessage = getErrorMessage(err);
        set({ error: errorMessage });
      } finally {
        set({ loading: false });
      }
    }
  },
}));
