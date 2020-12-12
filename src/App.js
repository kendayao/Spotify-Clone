import React, {useState, useEffect} from "react";
import Player from './components/player/Player'
import Login from './components/login/Login';
import {getTokenFromUrl} from './utils/spotify';
import SpotifyWebApi from 'spotify-web-api-js'
import './App.css';

const spotify = new SpotifyWebApi();

function App() {
// after login app component loads, gets token from url
  const[token, setToken]=useState(null);

    useEffect(()=>{
      const hash=getTokenFromUrl();
      window.location.hash="";
      const _token=hash.access_token;

      if(_token){
        setToken(_token)

        spotify.setAccessToken(_token);
        spotify.getMe().then(user=>{
          console.log('person', user);
        })
      }


    },[])
  
  return (
    <div className="app">
      {
        token? (
          <Player />)
          :(<Login />)
        }

      
    </div>
  );
}

export default App;
