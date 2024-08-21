import PetContextProvider from '@/contexts/pet-context-provider';
import { Pet } from '@/lib/types';

type ProviderProps = {
  data: Pet[];
  children: React.ReactNode;
};

const Providers = ({ data, children }: ProviderProps) => {
  return <PetContextProvider data={data}>{children}</PetContextProvider>;
};

export default Providers;
