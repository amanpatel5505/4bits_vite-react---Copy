import React ,{ useState} from 'react'
import './Navbar.css'
import { NavLink} from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
const Navbar = () => {

    const [menu,setMenu]= useState("Home");
const [showMenu, setShowMenu] = useState(false);

 const toggleMenu = () => {
   setShowMenu(!showMenu);
 };
  return (
    <>
      <header>
        <nav className="navbar">
            <div className="logo">
                <img src="rotaract.png" alt="" />
            </div>
            <div className="container">
                <div className="menu-icon" id="menu-icon" onClick={toggleMenu}>
                    <IoMenu/>
                </div>
                <div className={`nav-elements  ${showMenu && 'active'}`}>
                    <ul className={`nav-menu  ${showMenu && 'active'}`}>
                    <li onClick={() =>{setMenu("Home")}}><span><NavLink to="/">Home</NavLink></span>{menu==="Home"?<hr></hr>:<></>}</li>
                        <li><span>FAQs</span></li>
                        <li><span>AboutUs</span></li>
                        <li><span>Events</span></li>
                        <li><span>Board</span></li>
                        <li><span>Merchandise</span></li>
                        <li><span>ContactUs</span></li>
                        <li onClick={() =>{setMenu("Login")}} className="nav-login-cart"><button><span><NavLink to="/Login">Login</NavLink></span></button>{menu==="Home"?<a href=""></a>:<></>}</li>

                    </ul>
                </div>
            </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar
