import { useOutletContext } from "react-router-dom";
import './About.css'
import Card from 'react-bootstrap/Card';import Accordion from 'react-bootstrap/Accordion';
import SubscriptionBtn from './SubscriptionBtn'

const About = () => {
  
  const { artistPhotos: [artistPhotos, setArtistPhotos]} = useOutletContext()

  return (
    <div className="about-me-page">
      <Card 
        style={{ 
          // border: '1px solid red',
          width: '18rem', 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'black' }
        }>
          <img className="artist-about-img" src={artistPhotos[1].url} alt='Artist Alyssa Grey' />

          <Card.Body>

          <Card.Title style={{color: 'white'}}>Alyssa Grey</Card.Title>
          
          <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
          </Card.Body>
          <SubscriptionBtn />
      </Card>
    </div>
  )
};

export default About;
