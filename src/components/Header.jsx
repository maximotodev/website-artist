import { NavLink } from "react-router-dom"
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faStar, faMusic, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

  const activeStyle = {
    fontWeight: "bold",
    color: "white",
    borderBottom: '3px solid #ffffff'
  }

  return (
    <header className="header">
      <nav className="navbar">
        <NavLink
          to="/"
          style={({isActive}) => isActive ? activeStyle : null}><FontAwesomeIcon icon={faHome}/>
          </NavLink>
        <NavLink
          to="about"
          style={({isActive}) => isActive ? activeStyle : null}><FontAwesomeIcon icon={faStar}/>
          </NavLink>
        <NavLink
          to="music"
          style={({isActive}) => isActive ? activeStyle : null}><FontAwesomeIcon icon={faMusic}/>
          </NavLink>
        <NavLink
          to="store"
          style={({isActive}) => isActive ? activeStyle : null}><FontAwesomeIcon icon={faEnvelope}/>
          </NavLink>
      </nav>
    </header>
  )
};

export default Header;
