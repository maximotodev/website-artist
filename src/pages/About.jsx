import { useOutletContext } from "react-router-dom";
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRepeat } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
// import SubscriptionBtn from './SubscriptionBtn'

const About = () => {

  
  const { artistPhotos: [artistPhotos]} = useOutletContext()

  // Define your array of elements
  const elements = ['my cats name is pico 🐱', 'i wrote my first song when i was 8', 'i love going to the beach 🏖️', 'Perspiciatis, impedit! Veritatis reiciendis enim?', 'Watermelon', 'my favorite fruit is kiwi 🥝'];

  // State to hold the randomly selected element
  const [randomElement, setRandomElement] = useState(elements[0]);

  // Function to generate a random element
  const generateRandomElement = () => {
    const randomIndex = Math.floor(Math.random() * elements.length);
    setRandomElement(elements[randomIndex]);
  };

  return (
    <div className="about-me wrapper">
      <div className='hero'>
        <h1 className="artist-title">Alyssa Grey</h1>
        <img className="artist-img" src={artistPhotos[1].url} alt='Artist Alyssa Grey' />
        {/* <SubscriptionBtn /> */}
        <div className="artist-description">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, impedit! Veritatis reiciendis nemo quam blanditiis molestias eius beatae cum enim?</p> 
          <p>Lorem ipsum dolor sit amet: <span style={{backgroundColor: 'black', fontSize: '.6rem', padding: '0.3em'}}>{randomElement}</span></p>
        </div>
        <button onClick={generateRandomElement} style={{alignSelf: 'center', borderRadius: '50%', backgroundColor: 'white', }}><FontAwesomeIcon icon={faRepeat}/></button>
      </div>
    </div>
  )
};

export default About;
