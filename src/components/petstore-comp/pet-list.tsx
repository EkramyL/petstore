'use client';
import { usePetContext } from '@/lib/hooks';
import Image from 'next/image';
import React from 'react';

const PetList = () => {
  const { pets, selectedPetId, handleSelectedPetId } = usePetContext();

  return (
    <ul className="bg-white border-b border-black/10 w-full h-full">
      {pets.map((pet) => (
        <li key={pet.id}>
          <button
            onClick={() => {
              handleSelectedPetId(pet.id);
            }}
            className={`flex items-center gap-3 px-5 w-full h-[70px] cursor-pointer text-base hover:bg-[#d7d9da] focus:bg-[#d7d9da] transition ${
              pet.id === selectedPetId && 'bg-[#d7d9da]'
            }`}
          >
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
