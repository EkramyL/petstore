'use client';

import { Pet } from '@/lib/types';
import { createContext, useState } from 'react';

type PetContextProviderProps = {
  data: Pet[];
  children: React.ReactNode;
};

type TPetContext = {
  pets: Pet[];
  selectedPetId: string | null;
  selectedPet: Pet | undefined;
  petsNumber: number;
  handleCheckedoutPet: (id: string) => void;
  handleSelectedPetId: (id: string) => void;
};

export const PetContext = createContext<TPetContext | null>(null);

const PetContextProvider = ({ data, children }: PetContextProviderProps) => {
  // stats
  const [pets, setPets] = useState(data);
  const [selectedPetId, setSelectedPetId] = useState<string | null>(null);

  // derived stats
  const selectedPet = pets.find((pet) => pet.id === selectedPetId);
  const petsNumber = pets.length;

  // event handlers / sctions
  const handleCheckedoutPet = (id: string) => {
    setPets(pets.filter((pet) => pet.id !== id));
    setSelectedPetId(null);
  };

  const handleSelectedPetId = (id: string) => {
    setSelectedPetId(id);
  };

  return (
    <PetContext.Provider
      value={{
        pets,
        selectedPetId,
        selectedPet,
        handleSelectedPetId,
        handleCheckedoutPet,
        petsNumber,
      }}
    >
      {children}
    </PetContext.Provider>
  );
};

export default PetContextProvider;
