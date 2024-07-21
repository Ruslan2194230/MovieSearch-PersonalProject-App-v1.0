import ErrorPage from 'pages/ErrorPage/ErrorPage';
import React, { createContext, useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const ErrorContext = createContext();
export const useError = () => React.useContext(ErrorContext);
export const ErrorProvider = ({ children }) => {
  const [seriousError, setSeriousError] = useState(null);
  const [minorError, setMinorError] = useState(null);
  const [warnigNotice, setWarnigNotice] = useState(null);

  const clearErrors = () => {
    setSeriousError(null);
    setMinorError(null);
  };

  const handleSeriousError = error => {
    setSeriousError(error);
  };

  const handleMinorError = error => {
    setMinorError(error);
    // toast.error(error);
  };
  const handleWarning = warnMessage => {
    setWarnigNotice(warnMessage);
    // toast.warn(warnMessage);
  };
  return (
    <ErrorContext.Provider
      value={{
        seriousError,
        handleSeriousError,
        handleMinorError,
        handleWarning,
        clearErrors,
      }}
    >
      {children}

      {seriousError && <ErrorPage />}
      {/* {minorError && <ToastContainer autoClose={3000} />}
      {warnigNotice && <ToastContainer autoClose={3000} theme="dark" />} */}
    </ErrorContext.Provider>
  );
};
