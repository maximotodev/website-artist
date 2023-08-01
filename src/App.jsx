import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Music from './pages/Music'
import Contact from './pages/Contact'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />}/>
          <Route path="music" element={<Music />} />
          <Route path="store" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
