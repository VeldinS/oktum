import React, {useCallback, useState} from 'react';
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
import { AuthContext } from './authentication/authContext';
import Login from "./components/admin/login/Login";
import Admin from "./components/admin/Admin";
import {Provider} from "react-redux";
import store from './store/store';


const App = () => {

    const [language, setLanguage] = useState<'bosnian' | 'english'>('bosnian');

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = useCallback(() => {
        setIsLoggedIn(true);
    }, []);

    const logout = useCallback(() => {
        setIsLoggedIn(false);
    }, []);

    let routes;

    if(isLoggedIn){
        routes =(
            <Provider store={store}>
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
                        <Route path='/Login' element={<Login/>}/>
                        <Route path='/Admin' element={<Admin/>}/>
                    </Routes>
            </LanguageContext.Provider>
            </Provider>
        )
    }
        else{
            routes = (
                <Provider store={store}>
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
                            <Route path='/Login' element={<Login/>}/>
                            <Route path='/Admin' element={<Admin/>}/>
                        </Routes>
                </LanguageContext.Provider>
                </Provider>
            )
    }

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
                login: login,
                logout: logout }}
        >
            <Router>
                <main>
                    {routes}
                </main>
            </Router>
        </AuthContext.Provider>
    );
}

export default App;
