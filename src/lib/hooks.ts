import { PetContext } from '@/contexts/pet-context-provider';
import { useContext } from 'react';

export const usePetContext = () => {
  const context = useContext(PetContext);

  if (!context) {
    throw new Error('no context');
  }
  return context;
};
