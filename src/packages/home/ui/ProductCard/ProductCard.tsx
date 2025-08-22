import Image from 'next/image';
import styles from './ProductCard.module.scss';
import { ProductType } from '@/entities/product/types/types';
import { Button } from '@/shared/ui';

const ProductCard = (props: ProductType) => {
  const { title, category, price, image } = props;

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={image ?? ''}
          alt={title ?? ''}
          sizes="(max-width: 768px) 70vw, 30vw"
          quality={50}
          fill
        />
      </div>
      <header className={styles.content}>
        <p className={styles.title}>{title}</p>
        <p className={styles.caption}>{category}</p>
        <p className={styles.price}>{price}</p>
        <Button fullWidth={true}>Add to Cart</Button>
      </header>
    </div>
  );
};

export default ProductCard;
