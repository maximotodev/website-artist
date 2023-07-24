import {useState} from 'react'
import './Layout.css'
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from './Footer'

const Layout = () => {
  const [isMute, setIsMute] = useState(true);
  return (
    <div className="layout">
      <Header />
      <Outlet context={[isMute, setIsMute]}/>
      <Footer />
    </div>
  )
};

export default Layout;
