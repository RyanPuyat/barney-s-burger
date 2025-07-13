import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { updateName } from './userSlice';

function CreateUser() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;
    dispatch(updateName(username));
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mt-15 not-target:text-2xl">
        Hey there! What should we call you before we get grilling?
      </p>

      <input
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="focus:ring-opacity-50 mt-10 h-15 w-[500px] rounded-full bg-orange-100 px-8 py-2 text-xl ring ring-orange-500 transition-all duration-300 placeholder:text-yellow-500 focus:ring-2 focus:ring-orange-500 focus:outline-none"
      />

      {username !== '' && (
        <div className="mt-10">
          <Button
            size="lg"
            shape="pill"
            className="transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:ring-2 hover:ring-orange-600"
            onClick={() => navigate('/menu')}
          >
            Proceed to menu
          </Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
