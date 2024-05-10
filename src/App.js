import {React, useEffect } from 'react';
import './App.css';
import { useTelegram } from './components/hooks/useTelegram';
import Header from './components/header/Header';

function App() {
  
  const {
    onToggelButton, tg
} = useTelegram();


  useEffect(()=>{
    tg.ready();
  },[])



  return (
    <div className="App">
      <Header/>
      <button onClick={onToggelButton}>
        toggle
      </button>
    </div>
  );
}

export default App;
