
import './App.css';


import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import Contents from './components/pages/Contents';
import Advertise from './components/pages/Advertise';
import Contact from './components/pages/Contact';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
  return (
    <Router>
    <div className="App">
        <Navbar/>
        
        <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/AboutUs' element={<AboutUs/>} />
         <Route path='/Contents' element={<Contents/>} />
         <Route path='/Advertise' element={<Advertise/>} />
         <Route path='/Contact' element={<Contact/>} />
        </Routes>
        
        <Footer/>
    </div>
    </Router>
  );
}

export default App;
