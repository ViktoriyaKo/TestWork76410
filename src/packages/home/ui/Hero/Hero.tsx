'use client';
import Image from 'next/image';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          alt={'hero'}
          className={styles.image}
          priority
          sizes="70vw"
          fill
          src={'/frame.svg'}
        />
        <div className={styles.background} />
      </div>
      <div className={styles.wrapper}>
        <p className={styles.caption}>{'Make the right choice'}</p>
        <h1 className={styles.title}>{'AbeloHost shop'}</h1>
      </div>
    </section>
  );
};

export default Hero;
