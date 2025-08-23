import { useProductsStore } from '@/entities/product';
import { useEffect } from 'react';
import { useAuthStore } from '@/features/auth';
import { getUserInfo } from '@/features/auth/api/login';

const useInitApp = () => {
  const { fetchProducts } = useProductsStore();
  const { setAuthorized, setUser, user } = useAuthStore();

  useEffect(() => {
    if (user) return;
    const init = async () => {
      try {
        const user = await getUserInfo();
        setUser(user);
        setAuthorized(true);
      } catch (err) {
        setAuthorized(false);
        setUser(null);
      }
    };

    init();
  }, []);

  useEffect(() => {
    fetchProducts();
  }, []);
};

export default useInitApp;
