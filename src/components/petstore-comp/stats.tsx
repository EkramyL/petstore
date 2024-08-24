'use client';

import { usePetContext } from '@/lib/hooks';

const Stats = () => {
  const { petsNumber } = usePetContext();
  return (
    <section className="text-center">
      <p className="text-2xl font-bold">{petsNumber}</p>
      <p className=" text-lg font-medium opacity-80">current guests</p>
    </section>
  );
};

export default Stats;
