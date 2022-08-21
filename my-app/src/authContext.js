import { useState, createContext, useContext } from "react";

const authContext = createContext();

const useAuth = () => useContext(authContext);

function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <authContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </authContext.Provider>
  );
}

export { AuthProvider, useAuth };
