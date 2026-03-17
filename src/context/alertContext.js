import react, { createContext, useContext, useState } from "react";

const AlertContext = createContext(undefined);

export const AlertProvider = ({ children }) => {
  // 1. Define State
  const [state, setState] = useState({
    isOpen: false,
    type: 'success',
    message: '',
  });

  // 2. Define Actions
  const onOpen = (type, message) => setState({ isOpen: true, type, message });
  const onClose = () => setState({ isOpen: false, type: '', message: '' });

  // 3. Return the Provider
  return (
    <AlertContext.Provider
      value={{
        ...state,
        onOpen,
        onClose,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => useContext(AlertContext);