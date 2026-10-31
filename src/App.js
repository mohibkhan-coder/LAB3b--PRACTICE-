import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { UserProvider } from "./context/UserContext";
import { ThemeProvider } from "./context/ThemeContext";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <UserProvider>
          <Dashboard />
        </UserProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;