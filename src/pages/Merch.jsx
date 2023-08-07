import './Merch.css'
import { Zoom } from 'react-awesome-reveal';
const Merch = () => {

  return (
    <div className="merch wrapper">
      <h1 className='wrapper-title'>Store</h1>
      <Zoom cascade>
        <p style={{fontSize: '1rem'}}>Coming soon...</p>
      </Zoom>
    </div>
  );
};

export default Merch;
