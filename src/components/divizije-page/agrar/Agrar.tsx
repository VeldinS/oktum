import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

import {texts} from "../../../languages/language";

import './agrar.css'

import image1 from "../../../images/agro-page-background.webp";
import image2 from "../../../images/logo.webp";
import image3 from "../../../images/agrar-page-background2.webp"
import image4 from '../../../images/agrar-page-part1.webp'
import image5 from '../../../images/agrar-page-part2.webp'
import image6 from '../../../images/agrar-page-part3.webp'
import image7 from "../../../images/divisions-agro-background.webp";
import image8 from "../../../images/cancel.apng";
import image9 from '../../../images/agrar-page-part4.webp'
import image10 from '../../../images/agrar-page-part5.webp'
import Footer from "../../UI Elements/Footer";
import FooterMobile from "../../UI Elements/FooterMobile";
import {
    hideAboutOverlay,
    showAboutOverlay,
    toggleLanguagefunction, toggleLanguageMobileAboutfunction,
    useHamburgerAboutScroll,
    useNavbarImageScroll,
    useNavbarScroll
} from "../../../functions/helpers";
import image14 from "../../../images/bosnian-flag.webp";
import image15 from "../../../images/english-flag.webp";
import DivisionCard from "../../cards/division-page/DivisionCard";
import DivisionCard1 from "../../cards/division-page/DivisionCard1";
import DivisionCardMobile from "../../cards/division-page/DivisionCardMobile";
import image18 from "../../../images/agrar-background-mobile.webp";
import image19 from "../../../images/facebook.png";
import image20 from "../../../images/instagram2.png";

const Divisions = () => {

    function getFlagImageUrl(language:any) {
        switch (language) {
            case 'english':
                return image14;
            case 'bosnian':
                return image15;
        }
    }

    const [bgImage, setBgImage] = useState(image1);
    const mediaQuery = window.matchMedia('(min-width: 500px)');
    useEffect(() => {
        const agrarBackground = document.getElementById("agrarBackground");
        const changeBackground = () => {
            if (mediaQuery.matches) {
                setBgImage(image1);
                // @ts-ignore
                agrarBackground.classList.add("fixed-background");
            } else {
                setBgImage(image7);
            }
        };
        changeBackground();
        mediaQuery.addListener(changeBackground);
        return () => {
            mediaQuery.removeListener(changeBackground);
        };
    }, []);

    const [bgImageMobile, setBgImageMobile] = useState(image3);
    useEffect(() => {
        const changeBackground = () => {
            if (mediaQuery.matches) {
                setBgImageMobile(image3);
            } else {
                setBgImageMobile(image18);
            }
        };
        changeBackground();
        mediaQuery.addListener(changeBackground);
        return () => {
            mediaQuery.removeListener(changeBackground);
        };
    }, []);

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
            <div id={"agrarBackground"} className={"about-page-main"} style={{backgroundImage:  `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,.55)), url(${bgImage})`, backgroundSize: "cover", height: "100vh", backgroundPosition: "center center"}}>
                <div className={"home-page-header"}>
                    <div className={" header-row"}>
                        <nav className="navbar" >
                            <div id={"navbar-items"} className="navbar-items">
                                <div className="navbar-item navbar-item-image">
                                    <img loading={"lazy"} id={"navbar-image"} src={image2} className={"logo-image navbar-logo"} alt="Logo" onClick={() => navigate('/')} />
                                </div>
                                <div className="navbar-item navbar-item1">
                                    <p onClick={() => navigate('/')} className={"navbar-text1"}>{texts[language].homeButton}</p>
                                </div>
                                <div className="navbar-item navbar-item1">
                                    <p onClick={() => navigate('/Divisions')} className={"navbar-text1"}>{texts[language].divisionsButton}</p>
                                    <div className="dropdown-content">
                                        <a onClick={() => navigate('/Divisions/Finansije')}>{texts[language].divisionsButton2}</a>
                                        <a onClick={() => navigate('/Divisions/Logistika')}>{texts[language].divisionsButton3}</a>
                                    </div>
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
                                            <img loading={"lazy"} className={"language-image"} src={getFlagImageUrl(language)} alt={language + ' flag'}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <label onClick={showAboutOverlay}  id={"hamburger-about"} className="hamburger-about">
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
                            <p onClick={() => navigate('/Divisions')} className={"navbar-text1"}>{texts[language].allDivisionsButton}</p>
                            <br/>
                            <p onClick={() => navigate('/Contact')} className={"navbar-text1"}>{texts[language].contactButton}</p>
                            <br/>
                            <div style={{display:"flex", flexDirection:"row", alignItems:"center", marginBottom:"10px"}}>
                                <p style={{paddingRight: "5px", margin:"auto"}} onClick={toggleLanguageMobileAbout}>{texts[language].button}</p>
                                <img loading={"lazy"} className={"language-image"} src={getFlagImageUrl(language)} alt={language + ' flag'}/>
                            </div>
                            <img loading={"lazy"} onClick={hideAboutOverlay} className={"close-button"} src={image8} alt={"/"}/>
                            <div style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:"100px"}}>
                                <div style={{display:"flex", flexDirection:"row"}}>
                                    <a href={"https://www.facebook.com/people/OKTUM-finance-more/100092493469581/"}><img style={{width:"40px", height:"40px"}} loading={"lazy"} src={image19} className={"contact-image overlay-media"} alt={""}/></a>
                                    <a href={"https://www.instagram.com/invites/contact/?i=ak4rgdbtvl0e&utm_content=r7xo6xc"}><img style={{width:"40px", height:"40px"}} loading={"lazy"} src={image20} className={"contact-image overlay-media"} alt={""}/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%"}}>
                    <h1 className={"agrar-page-header"}  style={{ margin: 0, marginTop: "-200px"}}>{texts[language].agrarPageMainHeading}</h1>
                </div>
            </div>

            <div className="my-component-agrar" style={{backgroundImage:  `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,.55)), url(${bgImageMobile})`, backgroundAttachment: "fixed", backgroundSize: "cover"}}>

                <div className="general-info-agrar">
                    <h1>{texts[language].agrarPageHeading1}</h1>
                    <div className={"agrar-text"}>
                        <p>{texts[language].agrarPageText1}</p>
                    </div>
                </div>

                <div className={"agrar-card-desktop"}>
                    <DivisionCard title={texts[language].agrarPageHeading2} imageSrc={image4} text={texts[language].agrarPageText2}/>
                    <div className={"hor-line"}><hr/></div>
                    <DivisionCard1 title={texts[language].agrarPageHeading3} imageSrc={image5} text={texts[language].agrarPageText3}/>
                    <div className={"hor-line"}><hr/></div>
                    <DivisionCard title={texts[language].agrarPageHeading5} imageSrc={image9} text={texts[language].agrarPageText5}/>
                    <div className={"hor-line"}><hr/></div>
                    <DivisionCard1 title={texts[language].agrarPageHeading6} imageSrc={image10} text={texts[language].agrarPageText6}/>
                    <div className={"hor-line"}><hr/></div>
                    <DivisionCard title={texts[language].agrarPageHeading4} imageSrc={image6} text={texts[language].agrarPageText4}/>
                </div>

                <div className={"agrar-cards-mobile"}>
                    <DivisionCardMobile title={texts[language].agrarPageHeading2} imageSrc={image4} text={texts[language].agrarPageText2} readMore={texts[language].readMore} />
                    <div className={"hor-line"}><hr/></div>
                    <DivisionCardMobile title={texts[language].agrarPageHeading3} imageSrc={image5} text={texts[language].agrarPageText3} readMore={texts[language].readMore}/>
                    <div className={"hor-line"}><hr/></div>
                    <DivisionCardMobile title={texts[language].agrarPageHeading5} imageSrc={image9} text={texts[language].agrarPageText5} readMore={texts[language].readMore}/>
                    <div className={"hor-line"}><hr/></div>
                    <DivisionCardMobile title={texts[language].agrarPageHeading6} imageSrc={image10} text={texts[language].agrarPageText6} readMore={texts[language].readMore}/>
                    <div className={"hor-line"}><hr/></div>
                    <DivisionCardMobile title={texts[language].agrarPageHeading4} imageSrc={image6} text={texts[language].agrarPageText4} readMore={texts[language].readMore}/>
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