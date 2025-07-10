import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../ui/Button';

function CreateUser() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mt-10 text-2xl">
        Hey there! What should we call you before we get grilling?
      </p>
      <div className="mt-10">
        <input
          placeholder="Your full name"
          // value={query}
          // onChange={(e) => setQuery(e.target.value)}
          className="focus:ring-opacity-50 h-15 w-[500px] rounded-full bg-orange-100 px-8 py-2 text-xl ring ring-orange-500 transition-all duration-300 placeholder:text-yellow-500 focus:ring-2 focus:ring-orange-500 focus:outline-none"
        />
      </div>

      <div className="mt-10">
        <Button
          size="lg"
          shape="pill"
          className="transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:ring-2 hover:ring-orange-600"
          onClick={() => navigate('/orderMenu')}
        >
          Proceed to menu
        </Button>
      </div>
    </form>
  );
}

export default CreateUser;
