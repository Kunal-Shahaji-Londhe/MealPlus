import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [username, SetUsername] = useState('');

  return (
    <UserContext.Provider value={{ username, SetUsername }}>
      {children}
    </UserContext.Provider>
  );
};
