import React, {useState, useEffect} from "react";
import Login from './components/login/Login';
import {getTokenFromUrl} from './utils/spotify';
import './App.css';

function App() {

  const[token, setToken]=useState(null);

    useEffect(()=>{
      const hash=getTokenFromUrl();
      window.location.hash="";
      const _token=hash.access_token;

      if(_token){
        setToken(_token)
      }


    },[])
  
  return (
    <div className="app">
      <Login />
    </div>
  );
}

export default App;
