import { useEffect, useState } from 'react';

const SearchBar = ({ onSearchSubmit, clearResults }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);

  useEffect(() => {
    const timer = setTimeout(() => setSearchTerm(debouncedTerm), 1000);
    return () => clearTimeout(timer);
  }, [debouncedTerm]);

  useEffect(() => {
    if (searchTerm !== '') {
      onSearchSubmit(searchTerm);
    } else {
      clearResults();
    }
  }, [searchTerm]);

  return (
    <header className='mx-6 mt-12 mb-8 h-12 relative'>
      <input
        type='text'
        placeholder='Search for TV Shows'
        className='
          border border-purple-800 rounded-lg shadow-even 
          text-slate-800 placeholder:text-slate-400
          w-full pl-4 pr-16 py-2
          focus:outline-none focus-visible:ring-1 focus-visible:ring-purple-800'
        onChange={e => setDebouncedTerm(e.target.value)}
        onFocus={e => e.target.select()}
        value={debouncedTerm}
      />
      <img
        src='/search-light.svg'
        alt='search icon'
        className='h-[41px] absolute right-0 top-0 py-2 px-4 bg-purple-800 rounded-r-lg'
      />
    </header>
  );
};

export default SearchBar;
