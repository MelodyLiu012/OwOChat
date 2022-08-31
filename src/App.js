import './App.css';
import Logo from "./components/Logo"
import Chat from "./components/chat/Chat"
import User from "./components/User"
import OwOSetModal from './components/chat/OwOSetModal';
import { useState } from 'react';
import { useLocalStorage } from './util/useLocalStorage';

const App = () => {
  const [name, setName] = useLocalStorage("username", "Gwuest");
  const [owoCount, setOwoCount] = useLocalStorage("owo-count", 0);
  const [uwuCount, setUwuCount] = useLocalStorage("uwu-count", 0);

  const [owoSetVis, setOwoSetVis] = useState(false);
  const [owoLevel, setOwoLevel] = useState(0);

  return (
    <div className="App">
      <Logo />
      <Chat 
        username={name} 
        owoSetVis={owoSetVis} 
        owoLevel={owoLevel} 
        setOwoLevel={setOwoLevel} 
        setOwoSetVis={setOwoSetVis}
        owoCount={owoCount}
        setOwoCount={setOwoCount}
        uwuCount={uwuCount}
        setUwuCount={setUwuCount}
      />
      <User 
        username={name} 
        setUsername={setName} 
        owoCount={owoCount}
        setOwoCount={setOwoCount}
        uwuCount={uwuCount}
        setUwuCount={setUwuCount}
      />
    </div>
  );
}

export default App;
