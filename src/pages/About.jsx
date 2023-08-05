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
    <div className="about-me-page">
      <div className="about-me-hero">
        <h3 className="about-me-greeting">Hey, I&apos;m Alyssa Grey</h3>
        <img className="artist-about-img" src={artistPhotos[1].url} alt='Artist Alyssa Grey' />
        {/* <SubscriptionBtn /> */}
        <p>I am an american singer & songwriter. I love music and...{quotes[randomNumber]}
        </p>
        {/* <button onClick={setQuotes(quotes[randomNumber])}><FontAwesomeIcon icon={faRepeat}/></button> */}
      </div>
    </div>
  )
};

export default About;
