import { useState, useEffect } from "react";

const Music = () => {

  const CLIENT_ID = 'fd5a6414fb164dac82a7fa7c46ff1713'
  const CLIENT_SECRET = '0880408c446a4f4e8a88ad64a7c09124'

  const [albums, setAlbums] = useState([])
  const [accessToken, setAccessToken] = useState('')

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
  const albumElement = albums.map(album => (<div style={{border: '1px solid magenta'}} key={album.id}>
    <img src={album.images[2].url} alt={album.name}/>
    <h3>{album.name}</h3>
  </div>))

  return (
    <div>
      {albumElement}
    </div>
  )
};

export default Music;
