import { useState, useEffect } from "react";
import './Music.css'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';



const Music = () => {

  const CLIENT_ID = 'fd5a6414fb164dac82a7fa7c46ff1713'
  const CLIENT_SECRET = '0880408c446a4f4e8a88ad64a7c09124'

  const [albums, setAlbums] = useState([])
  const [accessToken, setAccessToken] = useState('')

  console.log(albums)
// API Access Token
  useEffect(() => {
    var authParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
    }
    fetch('https://accounts.spotify.com/api/token', authParameters)
      .then(res => res.json())
      .then(data => {
        setAccessToken(data.access_token)
      })
      .catch(err => console.log(err))
  },[])

// Get artists albums
  useEffect( ()=> {
    accessToken &&
    fetch('https://api.spotify.com/v1/artists/3pepeKuCVRstCagyJZrGfq/albums', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + accessToken
        }
      })
        .then(res => res.json())
        .then(data => setAlbums(data.items))
        .catch(err => console.log(err))
    }, [accessToken])

  console.log(albums)

  // const slides = albums.map(album => ({
  //   key: nanoid(),
  //   content: <Link to={album.external_urls.spotify}><img width='180px' src={album.images[1].url} /><p>{album.name}</p></Link>
  // }))

  const slideElements = albums.map(album => (
  <Carousel.Item key={album.id}>
    <img style={{borderRadius: '10px'}} src={album.images[1].url} alt={album.name}/>
    <Carousel.Caption>
      <p>{album.name}</p>
    </Carousel.Caption>
  </Carousel.Item>))

  return (
        <Carousel>
        {slideElements}
      </Carousel>
  )
};

{/* <div className="carousel">
        <Carousel
        slides={slides}
        goToSlideDelay={300}
        showNavigation={true}/>
        </div> */}

export default Music;
