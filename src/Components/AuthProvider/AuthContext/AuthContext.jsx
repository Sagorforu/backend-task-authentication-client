import { createContext, useState } from "react";

export const AuthProvider = createContext(null);

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);

  const logOut = () => {
    setUser(null);
  }

  return (
    <AuthProvider.Provider value={{ user, setUser, logOut }}>
      {children}
    </AuthProvider.Provider>
  );
};

export default AuthContext;
