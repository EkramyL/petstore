'use client';

import { createContext, useState } from 'react';

type searchContextProviderProps = {
  children: React.ReactNode;
};

type TSearchContext = {
  searchQuery: string;
  handleSearchQuery: (newValue: string) => void;
};

export const SearchContext = createContext<TSearchContext | null>(null);

const SearchContextProvider = ({ children }: searchContextProviderProps) => {
  // stats
  const [searchQuery, setSearchQuery] = useState('');
  // derived stats

  // event handlers / sctions
  const handleSearchQuery = (newValue: string) => {
    setSearchQuery(newValue);
  };
  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        handleSearchQuery,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
