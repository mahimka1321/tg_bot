import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './components/hooks/useTelegram';

function App() {
  
  const {
    onToggelButton, tg
} = useTelegram();


  useEffect(()=>{
    tg.ready();
  },[])



  return (
    <div className="App">
      <button onClick={onToggelButton}>
        toggle
      </button>
    </div>
  );
}

export default App;
