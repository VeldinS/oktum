import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

import {texts} from "../../languages/language";

import './divisions.css'

import image1 from "../../images/divisions-page-background.webp";
import image2 from "../../images/logo.webp";
import image3 from "../../images/divisions-agro-background.webp";
import image4 from "../../images/divisions-finance-background.webp";
import image5 from "../../images/divisions-logistics-background.webp";
import image6 from "../../images/cancel.apng";
import Footer from "../UI Elements/Footer";
import FooterMobile from "../UI Elements/FooterMobile";
import {
    hideAboutOverlay,
    showAboutOverlay,
    toggleLanguagefunction, toggleLanguageMobileAboutfunction,
    useHamburgerAboutScroll,
    useNavbarImageScroll,
    useNavbarScroll
} from "../../functions/helpers";
import image14 from "../../images/bosnian-flag.webp";
import image15 from "../../images/english-flag.webp";
import DivisionsCard from "../cards/divisions-page/DivisionsCard";

const Divisions = () => {

    function getFlagImageUrl(language:any) {
        switch (language) {
            case 'english':
                return image14;
            case 'bosnian':
                return image15;
        }
    }

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, []);

    useNavbarScroll()
    useNavbarImageScroll()
    useHamburgerAboutScroll()
    showAboutOverlay()
    hideAboutOverlay()

    const [language, setLanguage] = useState(localStorage.getItem("language") || "bosnian");
    const toggleLanguage = () => {
        toggleLanguagefunction(language, setLanguage)
    }
    const toggleLanguageMobileAbout = () => {
        toggleLanguageMobileAboutfunction(language, setLanguage)
    }

    return(
        <div>
            <div className={"about-page-main"} style={{backgroundImage:  `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,.55)), url(${image1})`, backgroundSize: "cover", minHeight: "100vh", backgroundAttachment: "fixed", backgroundPosition: "center center"}}>
                <div className={"home-page-header"}>
                    <div className={" header-row"}>
                        <nav className="navbar" >
                            <div id={"navbar-items"} className="navbar-items">
                                <div className="navbar-item navbar-item-image">
                                    <img id={"navbar-image"} src={image2} className={"logo-image navbar-logo"} alt="Logo" onClick={() => navigate('/')} />
                                </div>
                                <div className="navbar-item navbar-item1">
                                    <p onClick={() => navigate('/')} className={"navbar-text1"}>{texts[language].homeButton}</p>
                                </div>
                                <div className="navbar-item navbar-item1">
                                    <p onClick={() => navigate('/About')} className={"navbar-text1"}>{texts[language].aboutButton}</p>
                                    <div className="dropdown-content">
                                        <a onClick={() => navigate('/About', { state: { scrollToId: 'o_firmi'}})}>{texts[language].aboutButton1}</a>
                                        <a onClick={() => navigate('/About', { state: { scrollToId: 'misija_i_vizija'}})}>{texts[language].aboutButton2}</a>
                                        <a onClick={() => navigate('/About', { state: { scrollToId: 'naši_rezultati'}})}>{texts[language].aboutButton3}</a>
                                    </div>
                                </div>
                                <div className="navbar-item navbar-item1">
                                    <p onClick={() => navigate('/Contact')} className={"navbar-text1"}>{texts[language].contactButton}</p>
                                    <div className="dropdown-content">
                                        <a onClick={() => navigate('/Contact')}>{texts[language].contactButton1}</a>
                                        <a onClick={() => navigate('/Contact', { state: { scrollToId: 'locationMap'}})}>{texts[language].contactButton2}</a>
                                    </div>
                                </div>
                                <div className="navbar-item navbar-item1">
                                    <p className={"navbar-text1"}>{texts[language].langButton}</p>
                                    <div className="dropdown-content">
                                        <a onClick={toggleLanguage} style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                                            <p style={{paddingRight: "5px", marginBottom: "0"}}>{texts[language].button}</p>
                                            <img className={"language-image"} src={getFlagImageUrl(language)} alt={language + ' flag'}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <label onClick={showAboutOverlay} id={"hamburger-about"} className="hamburger-about">
                                <input type="checkbox"/>
                                <svg viewBox="0 0 32 32">
                                    <path className="line line-top-bottom"
                                          d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                                    <path className="line" d="M7 16 27 16"></path>
                                </svg>
                            </label>
                        </nav>
                    </div>
                    <div id="overlayAbout">
                        <div className="text-container-about">
                            <p onClick={() => navigate('/')} className={"navbar-text1"}>{texts[language].homeButton}</p>
                            <br/>
                            <p onClick={() => navigate('/About')} className={"navbar-text1"}>{texts[language].aboutButton}</p>
                            <br/>
                            <p onClick={() => navigate('/Contact')} className={"navbar-text1"}>{texts[language].contactButton}</p>
                            <br/>
                            <p onClick={toggleLanguageMobileAbout}>{texts[language].button}</p>
                            <img onClick={hideAboutOverlay} className={"close-button"} src={image6} alt={"/"}/>
                        </div>
                    </div>
                </div>
                <div className={"divisions-page-header"} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%" }}>
                    <h1 className={"divisions-page-header1"} style={{ margin: 0 }}>{texts[language].divisionsPageHeading}</h1>
                </div>

                <div className="divisions1-container">
                    <div className={"divisions1-card-agrar"}>
                        <DivisionsCard span={texts[language].divisionsPageAgrarCardField1} imageSrc={image3} text={texts[language].divisionsPageAgrarCardField2} navigate={'/Divisions/Agrar'}/>
                    </div>
                    <div className={"divisions1-card-finance"}>
                        <DivisionsCard span={texts[language].divisionsPageFinanceCardField1} imageSrc={image4} text={texts[language].divisionsPageFinanceCardField2} navigate={'/Divisions/Finansije'}/>
                    </div>
                    <div className={"divisions1-card-logistics"}>
                        <DivisionsCard span={texts[language].divisionsPageLogisticsCardField1} imageSrc={image5} text={texts[language].divisionsPageLogisticsCardField2} navigate={'/Divisions/Logistika'}/>
                    </div>
                </div>
            </div>

            <Footer
                field1={texts[language].footerHomePage} field2={texts[language].footerAboutUs} field3={texts[language].footerContactUs}
                field4={texts[language].footerContactField} field5={texts[language].footerEmailField} field6={texts[language].footerLocationField} field7={texts[language].footerWorkingTimeField} field8={texts[language].footerWorkingTimeDays}
                navigate1={'/'} navigate2={'/About'} navigate3={'/Contact'}
            />

            <FooterMobile
                field1={texts[language].footerHomePage} field2={texts[language].footerAboutUs} field3={texts[language].footerContactUs}
                field4={texts[language].footerContactField} field5={texts[language].footerEmailField} field6={texts[language].footerLocationField} field7={texts[language].footerWorkingTimeField} field8={texts[language].footerWorkingTimeDays}
                navigate1={'/'} navigate2={'/About'} navigate3={'/Contact'}
            />

        </div>
    );
}

export default Divisions;