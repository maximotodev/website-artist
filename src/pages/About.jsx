import { useOutletContext } from "react-router-dom";
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRepeat } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
// import SubscriptionBtn from './SubscriptionBtn'

const About = () => {

  
  const { artistPhotos: [artistPhotos]} = useOutletContext()

  const [quotes, setQuotes] = useState([ "hello", "hola", "ciao", "hi", "har"])

  const randomNumber = Math.floor(Math.random() * quotes.length + 1)

  return (
    <div className="about-me wrapper">
      <div className='hero'>
        <h1 className="artist-title">Alyssa Grey</h1>
        <img className="artist-img" src={artistPhotos[1].url} alt='Artist Alyssa Grey' />
        {/* <SubscriptionBtn /> */}
        <p className="artist-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, impedit! Veritatis reiciendis nemo quam blanditiis molestias eius beatae cum enim?
        </p>
        {/* <button onClick={setQuotes(quotes[randomNumber])}><FontAwesomeIcon icon={faRepeat}/></button> */}
      </div>
    </div>
  )
};

export default About;
