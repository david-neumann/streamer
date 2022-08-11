function Header() {
  return (
    <header className='mb-6'>
      <input
        type='text'
        placeholder='Search'
        className="bg-[url('/search-bold.svg')] bg-no-repeat bg-scroll bg-[left_8px_top_9px] bg-[length:22px]
          border-2 border-slate-300 rounded-md shadow-even placeholder:text-slate-400
          w-full pl-10 pr-4 py-2"
      />
      {/* <img src='/search.svg' alt='search icon' className='w-5' /> */}
    </header>
  );
}

export default Header;
