import { ProductType } from '@/entities/product';
import { axiosRequest } from '@/shared/api';

export const getProducts = async () => {
  const res = await axiosRequest.get('/products?limit=12');
  const products: ProductType[] = res.data.products;

  return products;
};
