'use client';
import styles from './Products.module.scss';
import ProductCard from '../ProductCard/ProductCard';
import { useProductsStore } from '@/entities/product';
import { Spinner } from '@/shared/ui';
import { useAuthStore } from '@/features/auth';

const Content = () => {
  const { isAuthorized } = useAuthStore();
  const { loading, error, products } = useProductsStore();

  if (loading)
    return (
      <div className={styles.loading}>
        <Spinner />
      </div>
    );
  if (error) return <p className={styles.message}>{error}</p>;

  if (products && products.length > 0) {
    return (
      <div className={styles.wrapper}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            showButton={isAuthorized}
            {...product}
            image={product.images?.[0]}
          />
        ))}
      </div>
    );
  }

  return <p className={styles.message}>No products available</p>;
};

const Products = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Latest Products</h2>
      <Content />
    </section>
  );
};

export default Products;
