// import React from "react";
// import { ReactNavbar } from "overlay-navbar";
// import logo from '../../image/logo.png'

// const options = {
//   burgerColorHover: "#eb4034",
//   logo,
//   logoWidth: "20vmax",
//   navColor1: "white",
//   logoHoverSize: "10px",
//   logoHoverColor: "#eb4034",
//   link1Text: "Home",
//   link2Text: "products",
//   link3Text: "Contact",
//   link4Text: "About",
//   link1Url: "/",
//   link2Url: "/products",
//   link3Url: "/contact",
//   link4Url: "/about",
//   profileIconUrl: "/login",
//   link1Size: "1.3vmax",
//   link1Color: "rgba(35, 35, 35,0.8)",
//   nav1justifyContent: "flex-end",
//   nav2justifyContent: "flex-end",
//   nav3justifyContent: "flex-start",
//   nav4justifyContent: "flex-start",
//   link1ColorHover: "#eb4034",
//   link1Margin: "1vmax",
//   profileIconUrl: "/login",
//   profileIconColor: "rgba(35, 35, 35,0.8)",
//   searchIconColor: "rgba(35, 35, 35,0.8)",
//   cartIconColor: "rgba(35, 35, 35,0.8)",
//   profileIconColorHover: "#eb4034",
//   searchIconColorHover: "#eb4034",
//   cartIconColorHover: "#eb4034",
//   cartIconMargin: "1vmax",
// };

// const Header = () => {
//   return <ReactNavbar {...options}/>;
// };

// export default Header;
import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import UserOptions from "./UserOptions";
import { useSelector } from "react-redux";
import LoginIcon from "@mui/icons-material/Login";
import LegendToggleIcon from '@mui/icons-material/LegendToggle';
import SearchIcon from '@mui/icons-material/Search';
const Header = ({ history}) => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const handleSearch = () => {
     history.push("/search")
  }
  return (
    <div class="wrapper">
      <nav>
        <input type="checkbox" id="show-search" />
        <input type="checkbox" id="show-menu" />
        <label for="show-menu" class="menu-icon">
         <LegendToggleIcon style={{fontSize: "50px"}}/>
        </label>
        <div class="content">
          <div class="logo">
            <img src="https://layerdrops.com/wostinwp/wp-content/uploads/2022/04/light-logo-1.png" alt=""/>
            {/* <img src={photo} alt="" /> */}
          </div>
          <ul class="links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Services</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/blogs">Blog</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>    
           <Link to="/search"><SearchIcon/></Link> 
            </li>
          </ul>
        </div>

        {user ? (
          <label for="show-search" class="search-icon">
            {" "}
            {isAuthenticated && <UserOptions user={user} />}
          </label>
        ) : (
          <li>
            <Link to="/login">
              <LoginIcon />
            </Link>
          </li>
        )}

        {/* <form action="#" class="search-box">
        <input type="text" placeholder="Type Something to Search..." required/>
        <button type="submit" class="go-icon">Search</button>
      </form> */}
      </nav>
    </div>
  );
};

export default Header;
