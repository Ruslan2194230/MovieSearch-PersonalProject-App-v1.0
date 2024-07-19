import React from 'react';
import { useError } from '../../contexts/ErrorContext';

const ErrorPage = () => {
  const { error, clearError } = useError();

  return (
    <div>
      <h2>Oops! Something went wrong.</h2>
      <p>{error.message}</p>
      <button onClick={clearError}>Dismiss</button>
    </div>
  );
};

export default ErrorPage;
