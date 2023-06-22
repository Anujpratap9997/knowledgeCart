import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Acc from './components/Acc';
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
      <NavBar/>
      <Acc/>
      </Router>
    </div>
  );
}

export default App;

