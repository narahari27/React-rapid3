import { LOGO_URL } from "../utils/constants";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Header = () => {
  const [btnReact, setBtnReact] = useState("Login");
  console.log("Header Rendered");
  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);
  // useEffect(()=>{
  //   console.log('Use Effect Called');
  // },[btnReact]);
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header flex justify-between items-center">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="" />
      </div>
      <div className="nav-items">
        <ul className="nav-btn flex items-center">
          <li className="px-4">OnlineStatus:{onlineStatus ? "✔" : "⛔"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link className="" to="/about">
              About
            </Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact US</Link>
          </li>
          <li className="px-4">
            <Link to="/grocerry">Grocerry</Link>
          </li>
          <li className="px-4">
            <Link to="/">Cart</Link>
          </li>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              btnReact == "login"
                ? setBtnReact("logout")
                : setBtnReact("login");
            }}
          >
            {btnReact}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
