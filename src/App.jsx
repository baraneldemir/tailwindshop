// import { useState, useEffect } from 'react';
// import axios from "axios"
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from './HomePage';
import ContactUsPage from './ContactUsPage';
import SustainabilityPage from './SustainabilityPage';
import PlantHoodiePage from './PlantHoodiePage';
import Footer from './Footer';
import { ShoppingCartProvider } from './context/ShoppingCartContext';


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
            <Route path="/" element={ <HomePage/>}/>
            <Route path="/contactus" element={ <ContactUsPage/>}/>
            <Route path="/sustainability" element={ <SustainabilityPage/>}/>
            <Route path="/planthoodie" element={ <PlantHoodiePage/>}/>
        </Routes>
        <Footer/>
        
        
    </ShoppingCartProvider>

);
}

export default App;
