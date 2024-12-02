import React, { createContext, useContext, useState } from "react"; 
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // `null` means no user is logged in
  const navigate = useNavigate();

  // Simulate a login function
  const login = (username, password) => {
    // Replace this with real authentication logic
    if (username === "admin" && password === "password") {
      setUser({ username: "admin", role: "admin" });
      navigate("/admin"); // Redirect to Admin Panel after login
    } else {
      alert("Invalid credentials");
    }
  };

  // Simulate a logout function
  const logout = () => {
    setUser(null);
    navigate("/"); // Redirect to home page after logout
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access the AuthContext
export const useAuth = () => useContext(AuthContext);
