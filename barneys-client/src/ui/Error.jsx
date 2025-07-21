import { useNavigate, useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton';

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();
  const { data, message } = error;

  console.log(error);

  return (
    <div className="flex h-[100dvh] flex-col items-center justify-center p-4 text-center">
      <h1 className="mb-2 text-3xl font-bold">Something went wrong 😢</h1>
      <p className="mb-1 text-lg text-gray-700">{data}</p>
      <p className="mb-4 text-gray-500">
        {message || 'Unexpected error occurred.'}
      </p>
      <LinkButton onClick={() => navigate(-1)}>&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
