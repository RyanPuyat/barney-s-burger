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
    <form onSubmit={handleSubmit} className="flex items-center">
      <input
        placeholder="Search order number"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="focus:ring-opacity-50 h-10 w-[250px] rounded-full bg-orange-100 px-4 py-2 text-center text-lg ring ring-orange-500 transition-all duration-300 placeholder:text-yellow-500 focus:ring-2 focus:ring-orange-500 focus:outline-none"
      />
    </form>
  );
}

export default SearchOrder;
