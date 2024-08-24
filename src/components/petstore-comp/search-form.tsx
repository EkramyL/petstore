'use client';

import { useSearchContext } from '@/lib/hooks';

const SearchForm = () => {
  const { handleSearchQuery, searchQuery } = useSearchContext();
  return (
    <form className="w-full h-full">
      <input
        type="search"
        className="w-full h-full bg-white/20 rounded-md outline-none transition hover:bg-white/30 focus:bg-white/50 px-5 placeholder:text-white/50"
        placeholder="search pets"
        value={searchQuery}
        onChange={(e) => {
          handleSearchQuery(e.target.value);
        }}
      />
    </form>
  );
};

export default SearchForm;
