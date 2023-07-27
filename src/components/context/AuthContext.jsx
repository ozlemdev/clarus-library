import { createContext, useContext, useEffect, useState } from "react";

const AuthConstext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(sessionStorage.getItem("user") || false);

  useEffect(() => {
    sessionStorage.setItem("user", user);
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthConstext);
};

export default AuthContextProvider;
