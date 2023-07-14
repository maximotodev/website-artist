import React from "react"
import { Link } from "react-router-dom"
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      {/* <Link className="site-logo" to="/">#AlyssaGrey</Link> */}
      <nav className="navbar">
        <Link to="/">home</Link>
        <Link to="about">about</Link>
        <Link to="music">music</Link>
        <Link to="merch">merch</Link>
      </nav>
    </header>
  )
};

export default Header;
