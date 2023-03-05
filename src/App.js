import logo from './logo.svg';
import './App.css';
import { Home } from './Page/Home';
import { Categories } from './Page/Categories';
import DevServices from './Page/DevServices';
import AmazonService from './Page/AmazonService';
import Footer from './Components/Footer';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import { AboutUs } from './Page/AboutUs';
import Navbar from './Components/Navbar';
import { Team } from './Page/Team';
import { FormPage } from './Page/FormPage';

function App() {
  return (
  
    <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Aboutus' element={<AboutUs/>}/>
      <Route path='/Team' element={<Team/>}/>
      <Route path='/Services' element={<Categories/>}/>
      <Route path='/Contact' element={<FormPage/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
  );
}

export default App;

{/*<DevServices/>
<AmazonService/>*/}