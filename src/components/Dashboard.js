import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { UserContext } from "../context/UserContext";
import { ThemeContext } from "../context/ThemeContext";
import { increment, decrement } from "../redux/actions";

const Dashboard = () => {
  // Context API for User and Theme Data
  const { user, setUser } = useContext(UserContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  // Redux for Counter Data
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  // Conditional styling based on the selected theme
  const appStyles = {
    backgroundColor: theme === "light" ? "#ffffff" : "#222222",
    color: theme === "light" ? "#000000" : "#ffffff",
    minHeight: "100vh",
    textAlign: "center",
    padding: "50px",
    fontFamily: "Arial, sans-serif",
    transition: "all 0.3s ease"
  };

  return (
    <div style={appStyles}>
      {/* Theme Toggle Button */}
      <button 
        onClick={toggleTheme}
        style={{ padding: "8px 16px", marginBottom: "20px", cursor: "pointer", borderRadius: "5px" }}
      >
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>

      <hr style={{ borderColor: theme === "light" ? "#ccc" : "#444" }} />

      {/* User Context UI */}
      <h2>Welcome, {user}!</h2>
      <button 
        onClick={() => setUser(user === "Guest" ? "John Doe" : "Guest")}
        style={{ padding: "10px 20px", marginBottom: "30px", cursor: "pointer", borderRadius: "5px" }}
      >
        Toggle User Login
      </button>

      <hr style={{ borderColor: theme === "light" ? "#ccc" : "#444" }} />

      {/* Redux Counter UI */}
      <h2>Redux Counter: {count}</h2>
      <div style={{ gap: "10px", display: "flex", justifyContent: "center" }}>
        <button onClick={() => dispatch(increment())} style={{ padding: "10px 20px", cursor: "pointer", fontSize: "18px" }}>+</button>
        <button onClick={() => dispatch(decrement())} style={{ padding: "10px 20px", cursor: "pointer", fontSize: "18px" }}>-</button>
      </div>
    </div>
  );
};

export default Dashboard;