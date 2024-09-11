import { useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>Oops!!!!</h1>
      <h2>Something went wrong!!</h2>
      <h3>
        {error.status}:{error.statusText}
        <br />
        <a href="http://localhost:1234">Go to</a>
      </h3>
    </div>
  );
};

export default Error;
