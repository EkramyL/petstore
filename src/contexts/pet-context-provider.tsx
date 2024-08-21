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
  handleSelectedPetId: (id: string) => void;
};

export const PetContext = createContext<TPetContext | null>(null);

const PetContextProvider = ({ data, children }: PetContextProviderProps) => {
  const [pets, setPets] = useState(data);
  const [selectedPetId, setSelectedPetId] = useState<string | null>(null);

  const selectedPet = pets.find((pet) => pet.id === selectedPetId);

  const handleSelectedPetId = (id: string) => {
    setSelectedPetId(id);
  };

  return (
    <PetContext.Provider
      value={{ pets, selectedPetId, selectedPet, handleSelectedPetId }}
    >
      {children}
    </PetContext.Provider>
  );
};

export default PetContextProvider;
