import { Pet } from '@/lib/types';
import Image from 'next/image';
import React from 'react';

interface PetListProps {
  pets: Pet[];
}

const PetList = ({ pets }: PetListProps) => {
  return (
    <ul className="bg-white border-b border-black/10 w-full h-full">
      {pets.map((pet) => (
        <li key={pet.id}>
          <button className="flex items-center gap-3 px-5 w-full h-[70px] cursor-pointer text-base hover:bg-[#EFF1F2] focus:bg-[#EFF1F2] transition">
            <Image
              src={pet.imageUrl}
              alt="pet image"
              height={45}
              width={45}
              className="rounded-full object-cover w-[45px] h-[45px]"
            />
            <p className="font-semibold"> {pet.name}</p>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default PetList;
