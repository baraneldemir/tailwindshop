// import { useState, useEffect } from 'react';
// import axios from "axios"
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import ContactUsPage from './pages/ContactUsPage';
import SustainabilityPage from './pages/SustainabilityPage';
import PlantHoodiePage from './pages/PlantHoodiePage';
import Footer from './components/Footer';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import SlidePage from './pages/SlidePage';


function App() {  

    // const [persons, setPersons] = useState([]);
    
    // function getPersons() {
    //     axios.get(`${process.env.REACT_APP_BACKEND_URL}/messages`)
    //     .then(response => {
    //         setPersons(response.data)
    //     })
    //     .catch(error => console.error("Error fetching persons", error))
    // }
    // useEffect(() => {
    //     getPersons()
    // }, [] );
  return (
    <ShoppingCartProvider>
        <NavBar/>
        <Routes>
            <Route path="/" element={ <SlidePage/>}/>
            <Route path="/aboutus" element={ <HomePage/>}/>
            <Route path="/contactus" element={ <ContactUsPage/>}/>
            <Route path="/sustainability" element={ <SustainabilityPage/>}/>
            <Route path="/planthoodie" element={ <PlantHoodiePage/>}/>
            <Route path="/slide" element={ <SlidePage/>}/>
        </Routes>
        <Footer/>
        
        
    </ShoppingCartProvider>

);
}

export default App;
