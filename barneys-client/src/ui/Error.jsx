import { useNavigate, useRouteError } from 'react-router-dom';

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();
  const { data, message } = error;

  console.log(error);

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{data}</p>
      <p>{message}</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default Error;
