import React, {useState, useEffect} from "react";
import Player from './components/player/Player'
import Login from './components/login/Login';
import {getTokenFromUrl} from './utils/spotify';
import SpotifyWebApi from 'spotify-web-api-js'
import './App.css';
import {useStateValue} from './context-api/StateProvider'

const spotify = new SpotifyWebApi();

function App() {
// after login app component loads, gets token from url
 
  const[{user, token}, dispatch] = useStateValue();
  
    useEffect(()=>{
      const hash=getTokenFromUrl();
      window.location.hash="";
      const _token=hash.access_token;

      if(_token){
        dispatch({
          type: 'SET_TOKEN',
          token: _token
        })

        spotify.setAccessToken(_token);

        spotify.getMe().then(user=>{
          dispatch({
            type:'SET_USER',
            user: user
          })
        })

        spotify.getUserPlaylists().then(playlists => {
          dispatch({
            type: 'SET_PLAYLISTS',
            playlists: playlists,
          });
        });

        spotify.getPlaylist('37i9dQZEVXcC9NDreXolEp').then(response=>{
          dispatch({
            type: 'SET_DISCOVER_WEEKLY',
            discover_weekly:response,
          })
        })
      }

    },[token, dispatch])
  
  return (
    <div className="app">
      {
        token? (
          <Player spotify={spotify}/>)
          :(<Login />)
        }

      
    </div>
  );
}

export default App;
