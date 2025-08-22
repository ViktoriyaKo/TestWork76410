'use client';
import styles from './Products.module.scss';
import ProductCard from '../ProductCard/ProductCard';

const products = [
  {
    id: 1,
    title: 'Essence Mascara Lash Princess',
    description:
      'The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.',
    category: 'beauty',
    price: 9.99,
    image: '/test.jpg',
  },
  {
    id: 2,
    title: 'Essence Mascara Lash Princess',
    description:
      'The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.',
    category: 'beauty',
    price: 9.99,
    image: '/test.jpg',
  },
  {
    id: 3,
    title: 'Essence Mascara Lash Princess',
    description:
      'The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.',
    category: 'beauty',
    price: 9.99,
    image: '/test.jpg',
  },
];

const Products = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Latest Products</h2>
      <div className={styles.wrapper}>
        {products.map((product) => {
          return <ProductCard key={product.id} {...product} />;
        })}
      </div>
    </section>
  );
};

export default Products;
