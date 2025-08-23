import Image from 'next/image';
import styles from './ProductCard.module.scss';
import { ProductType } from '@/entities/product/types/types';
import { Button } from '@/shared/ui';
import { formatCurrency } from '@/shared/utils';

type ProductCard = ProductType & { showButton: boolean | null; image: string };

const ProductCard = (props: ProductCard) => {
  const { title, category, price, image, showButton } = props;

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={image ?? ''}
          alt={title ?? ''}
          sizes="(max-width: 768px) 70vw, 30vw"
          quality={100}
          fill
        />
      </div>
      <header className={styles.content}>
        <p className={styles.title}>{title}</p>
        {category && <p className={styles.caption}>{category}</p>}
        {price && <p className={styles.price}>{formatCurrency(price)}</p>}
        {showButton && <Button fullWidth={true}>Add to Cart</Button>}
      </header>
    </div>
  );
};

export default ProductCard;
