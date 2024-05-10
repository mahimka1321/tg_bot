import {useEffect } from 'react';
import Header from './components/header/Header';

import { useTelegram } from './components/hooks/useTelegram';
import './App.css';

function App() {

  const { onToggelButton, tg } = useTelegram();

  useEffect(()=>{
    tg.ready();
  }, [])




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
