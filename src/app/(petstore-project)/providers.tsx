import PetContextProvider from '@/contexts/pet-context-provider';
import SearchContextProvider from '@/contexts/search-context-provider';
import { Pet } from '@/lib/types';

type ProviderProps = {
  data: Pet[];
  children: React.ReactNode;
};

const Providers = ({ data, children }: ProviderProps) => {
  return (
    <PetContextProvider data={data}>
      <SearchContextProvider>{children}</SearchContextProvider>
    </PetContextProvider>
  );
};

export default Providers;
