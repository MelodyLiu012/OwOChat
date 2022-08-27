import './App.css';
import Logo from "./components/Logo"
import Chat from "./components/Chat"
import User from "./components/User"

const App = () => {
  return (
    <div className="App">
      <Logo></Logo>
      <Chat></Chat>
      <User></User>
    </div>
  );
}

export default App;
