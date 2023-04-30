import React, {useState} from 'react';
import './App.css';
import Home from "./components/home-page/Home";
import {Routes, Route, BrowserRouter as Router} from "react-router-dom";
import About from "./components/about-page/About";
import Contact from "./components/contact-page/Contact";
import Divisions from "./components/divizije-page/Divisions";
import Agrar from "./components/divizije-page/agrar/Agrar";
import Finance from "./components/divizije-page/finansije/Finance";
import Logistics from "./components/divizije-page/logistika/Logistics";
import LanguageContext from './languages/languageContext';


const App = () => {

    const [language, setLanguage] = useState<'bosnian' | 'english'>('bosnian');

         let routes =
                <LanguageContext.Provider value={{language, setLanguage}}>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/english/Home' element={<Home />} />
                            <Route path='/About' element={<About />} />
                            <Route path='/Contact' element={<Contact/>} />
                            <Route path='/Divisions' element={<Divisions/>}/>
                            <Route path='/Divisions/Agrar' element={<Agrar/>}/>
                            <Route path='/Divisions/Finansije' element={<Finance/>}/>
                            <Route path='/Divisions/Logistika' element={<Logistics/>}/>
                        </Routes>
                </LanguageContext.Provider>

    return (
            <Router>
                <main>
                    {routes}
                </main>
            </Router>
    );
}

export default App;
