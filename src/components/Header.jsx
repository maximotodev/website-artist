import { NavLink } from "react-router-dom"
import './Header.css'

const Header = () => {

  const activeStyle = {
    fontWeight: "bold",
    color: "white",
    borderBottom: '1px solid #ffffff'
  }

  return (
    <header className="header">
      {/* <Link className="site-logo" to="/">#AlyssaGrey</Link> */}
      <nav className="navbar">
        <NavLink
          to="/"
          style={({isActive}) => isActive ? activeStyle : null}>home
          </NavLink>
        <NavLink
          to="about"
          style={({isActive}) => isActive ? activeStyle : null}>about
          </NavLink>
        <NavLink
          to="music"
          style={({isActive}) => isActive ? activeStyle : null}>music
          </NavLink>
        <NavLink
          to="store"
          style={({isActive}) => isActive ? activeStyle : null}>store
          </NavLink>
      </nav>
    </header>
  )
};

export default Header;
