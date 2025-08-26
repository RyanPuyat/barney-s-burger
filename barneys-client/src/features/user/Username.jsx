import { useSelector } from 'react-redux';

function Username() {
  const userName = useSelector((state) => state.user.username);

  if (!userName) return null;

  return (
    <div>
      <h1 className="text-xl font-bold text-stone-500 uppercase">{userName}</h1>
    </div>
  );
}

export default Username;
