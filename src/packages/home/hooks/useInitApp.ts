import { useProductsStore } from '@/entities/product';
import { useEffect } from 'react';
import { useAuthStore } from '@/features/auth';

const useInitApp = () => {
  const { fetchProducts } = useProductsStore();
  const { fetchUserInfo } = useAuthStore();

  useEffect(() => {
    fetchProducts();
    fetchUserInfo();
  }, []);
};

export default useInitApp;
