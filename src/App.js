
import './App.css';
import NavbarPage from './components/NavbarPage';
import Home from './pages/Home';
import Discovery from './pages/Discovery';
import Photos from './pages/Photos';
import Contact from './pages/Contact';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <NavbarPage/>
     <Home/>
     <Discovery/>
     <Photos/>
     <Contact/>
    </div>
  );
}

export default App;
