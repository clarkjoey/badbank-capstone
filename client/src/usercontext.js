import React, { createContext, useContext, useState } from 'react';

// Create the UserContext
const UserContext = createContext();

// Create a custom hook for using the UserContext
export function useUserContext() {
  return useContext(UserContext);
}

// Create a context provider component
export function UserContextProvider({ children }) {
  const [userState, setUserState] = useState({
    user: '',
    auth: false,
    name: '',
    email: '',
    password: '',
    balance: '',
  });

  return (
    <UserContext.Provider value={{ userState, setUserState }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;