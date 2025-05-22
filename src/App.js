import './App.css';
import MainBanner from './Components/MainBanner';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App" style={{textAlign:"center",margin:"0% auto"}}>
      <Navbar/>
      <MainBanner/>
    </div>
  );
}

export default App;
