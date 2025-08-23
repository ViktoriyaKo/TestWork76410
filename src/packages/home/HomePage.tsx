'use client';
import { Hero, Products } from '@/packages/home/ui';
import { useInitApp } from '@/packages/home/hooks';

const HomePage = () => {
  useInitApp();

  return (
    <>
      <Hero />
      <Products />
    </>
  );
};

export default HomePage;
