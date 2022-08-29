import './App.css';
import Logo from "./components/Logo"
import Chat from "./components/Chat"
import User from "./components/User"
import OwOSetModal from './components/OwOSetModal';
import { useState } from 'react';

const App = () => {
  const [name, setName] = useState("Gwuest");

  const [owoSetVis, setOwoSetVis] = useState(false);
  const [owoLevel, setOwoLevel] = useState(0);

  return (
    <div className="App">
      <OwOSetModal visible={owoSetVis} setVisible={setOwoSetVis} setOwoLevel={setOwoLevel}/>
      <Logo></Logo>
      <Chat username={name} owoSetVis={owoSetVis} owoLevel={owoLevel} setOwoSetVis={setOwoSetVis}></Chat>
      <User username={name}></User>
    </div>
  );
}

export default App;
