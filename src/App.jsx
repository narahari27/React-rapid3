import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import UserContext from "./utils/UserContext";
function App() {
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = {
      name: "Narahari Gudagudi",
    };
    setUserName(data.name);
  }, []);
  return (
    <div className="app">
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <Header />
        <Outlet />
      </UserContext.Provider>
    </div>
  );
}

export default App;
