import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery('');
  }

  return (
    <div className="mr-15 flex w-full justify-center p-4 md:w-auto md:text-start">
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          placeholder="Search order number"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="focus:ring-opacity-50 h-10 w-48 rounded-full bg-orange-100 px-4 py-2 text-center ring ring-orange-500 transition-all duration-300 placeholder:text-yellow-500 focus:ring-2 focus:ring-orange-500 focus:outline-none md:w-[250px] md:text-lg"
        />
      </form>
    </div>
  );
}

export default SearchOrder;
