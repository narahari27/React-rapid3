import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [btnReact , setBtnReact] = useState('Login');
  console.log('Header Rendered');
  // useEffect(()=>{
  //   console.log('Use Effect Called');
  // },[btnReact]);
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
          alt=""
        />
      </div>
      <div className="nav-items">
        <ul className="nav-btn">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact US</Link></li>
          <li><Link to="/">Cart</Link></li>
          <button onClick={()=>{
            btnReact == 'login'? setBtnReact('logout') :
            setBtnReact('login');
          }}>{btnReact}</button>
        </ul>
      </div>
    </div>
  );
};
export default Header;