import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";

import {texts} from "../../languages/language";

import './about.css'

import image1 from '../../images/about-page-background.webp'
import image2 from "../../images/logo.webp";
import image3 from '../../images/about-page-section1.webp'
import image4 from '../../images/finance-page-part2.webp'
import image5 from '../../images/about-page-section3.webp'
import image6 from "../../images/cancel.apng";
import image7 from "../../images/about-page-section1.webp";
import image8 from "../../images/about-page-section2.webp";
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
import AboutCardMobile from "../cards/about-page/AboutCardMobile";
import image17 from "../../images/home-page-logistics2.webp";
import image16 from "../../images/oktum-background.webp";
import image18 from "../../images/home-page-mobile-background.webp";
import image19 from "../../images/facebook.png";
import image20 from "../../images/instagram2.png";

const About = () => {

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

    const [bgImageMobile, setBgImageMobile] = useState(image1);
    const mediaQuery = window.matchMedia('(min-width: 500px)');
    useEffect(() => {
        const changeBackground = () => {
            if (mediaQuery.matches) {
                setBgImageMobile(image1);
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

    const location = useLocation();

    useEffect(() => {
        // @ts-ignore
        if (location.state?.scrollToId) {
            // @ts-ignore
            const scrollToElement = document.getElementById(location.state.scrollToId);
            if (scrollToElement) {
                scrollToElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
        // @ts-ignore
    }, [location.state?.scrollToId]);

    useHamburgerAboutScroll()
    useNavbarScroll()
    useNavbarImageScroll()
    showAboutOverlay()
    hideAboutOverlay()

    const [language, setLanguage] = useState(localStorage.getItem("language") || "bosnian");
    const toggleLanguage = () => {
        toggleLanguagefunction(language, setLanguage)
    }
    const toggleLanguageMobileAbout = () => {
        toggleLanguageMobileAboutfunction(language, setLanguage)
    }

    function scrollToSection1(){
        const section = document.getElementById('o_firmi');
        // @ts-ignore
        section.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    function scrollToSection2(){
        const section = document.getElementById('misija_i_vizija');
        // @ts-ignore
        section.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    function scrollToSection3(){
        const section = document.getElementById('naši_rezultati');
        // @ts-ignore
        section.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }


    return (
        <div>
            <div className={"about-page-main"} style={{backgroundImage:  `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,.45)), url(${bgImageMobile})`, backgroundSize: "cover", height: "max-content", backgroundPosition: "center center"}}>
                <div className={"about-page-first"}>
                    <div className={"home-page-header"}>
                        <div className={"header-row"}>
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
                                            <a onClick={() => navigate('/Divisions/Agrar')}>{texts[language].divisionsButton1}</a>
                                            <a onClick={() => navigate('/Divisions/Finansije')}>{texts[language].divisionsButton2}</a>
                                            <a onClick={() => navigate('/Divisions/Logistika')}>{texts[language].divisionsButton3}</a>
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
                                <p onClick={() => navigate('/Divisions')} className={"navbar-text1"}>{texts[language].divisionsButton}</p>
                                <br/>
                                <p onClick={() => navigate('/Contact')} className={"navbar-text1"}>{texts[language].contactButton}</p>
                                <br/>
                                <div style={{display:"flex", flexDirection:"row", alignItems:"center", marginBottom:"10px"}}>
                                    <p style={{paddingRight: "5px", margin:"auto"}} onClick={toggleLanguageMobileAbout}>{texts[language].button}</p>
                                    <img loading={"lazy"} className={"language-image"} src={getFlagImageUrl(language)} alt={language + ' flag'}/>
                                </div>
                                <img loading={"lazy"} onClick={hideAboutOverlay} className={"close-button"} src={image6} alt={"/"}/>
                                <div style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:"100px"}}>
                                    <div style={{display:"flex", flexDirection:"row"}}>
                                        <a href={"https://www.facebook.com/people/OKTUM-finance-more/100092493469581/"}><img style={{width:"40px", height:"40px"}} loading={"lazy"} src={image19} className={"contact-image overlay-media"} alt={""}/></a>
                                        <a href={"https://www.instagram.com/invites/contact/?i=ak4rgdbtvl0e&utm_content=r7xo6xc"}><img style={{width:"40px", height:"40px"}} loading={"lazy"} src={image20} className={"contact-image overlay-media"} alt={""}/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"about-page-basic"}>
                        <h1 className={"about-page-heading1"}>{texts[language].aboutPageHeading1}</h1>
                        <div className={"about-page-basic-text"}>
                            <p>{texts[language].aboutPageText1}</p>
                        </div>
                        <div className={"shortcuts"}>
                            <button className="cta" onClick={scrollToSection1}>
                                <span className="hover-underline-animation">{texts[language].aboutPageHeading2}</span>
                                <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                                    <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10" fill="#fff"></path>
                                </svg>
                            </button>

                            <button className="cta" onClick={scrollToSection2}>
                                <span className="hover-underline-animation">{texts[language].aboutPageHeading3}</span>
                                <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                                    <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10" fill="#fff"></path>
                                </svg>
                            </button>

                            <button className="cta" onClick={scrollToSection3}>
                                <span className="hover-underline-animation">{texts[language].aboutPageHeading4}</span>
                                <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                                    <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10" fill="#fff"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={"about-part2"}>

                    <div id={"o_firmi"} className={"about-section1"}>
                        <h1 className={"about-section1-heading"}>{texts[language].aboutPageHeading2}</h1>
                        <div className={"hor-line-about"}><hr/></div>
                        <div className={"about-section1-row1"}>
                            <div className={"home-page-about-image-container about-image-cont"}>
                                <div className="cards-home-about" style={{marginRight: "12rem"}}>
                                    <div className="card-home-about one" style={{ backgroundImage:  `linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.5)), url(${image4})`, backgroundSize: "cover"}}></div>
                                    <div className="card-home-about two" style={{ backgroundImage:  `linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.5)), url(${image17})`, backgroundSize: "cover"}}></div>
                                    <div className="card-home-about three" style={{ backgroundImage:  `linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.5)), url(${image16})`, backgroundSize: "cover", backgroundPosition: "center"}}></div>
                                </div>
                            </div>
                            <div style={{display: "flex", flexDirection: "column"}}>
                                <p style={{textAlign: "left"}} className={"about-section1-text"}>{texts[language].aboutPageText2_1}</p>
                                <p style={{textAlign: "left"}} className={"about-section1-text"}>{texts[language].aboutPageText2_2}</p>
                            </div>
                        </div>
                    </div>

                    <div id={"misija_i_vizija"} className={"about-section1"}>
                        <h1 className={"about-section1-heading"}>{texts[language].aboutPageHeading3}</h1>
                        <div className={"hor-line-about"}><hr/></div>
                        <div className={"about-section1-row1"} style={{marginBottom: "2rem"}}>
                            <img loading={"lazy"} src={image7} className={"about-section1-row2-image"} alt={''}/>
                            <p className={"about-section1-text"}>{texts[language].aboutPageText3_1}</p>
                        </div>
                        <div className={"about-section1-row1"}>
                            <p className={"about-section1-text"}>{texts[language].aboutPageText3_2}</p>
                            <img loading={"lazy"} src={image8} className={"about-section1-row2-image"} alt={''}/>
                        </div>
                    </div>

                    <div id={"naši_rezultati"} className={"about-section1 about-section3"}>
                        <h1 className={"about-section1-heading"}>{texts[language].aboutPageHeading4}</h1>
                        <div className={"hor-line-about"}><hr/></div>
                        <div className={"about-section1-row1"}>
                            <ul className="bulleted-list">
                                <li>{texts[language].aboutPageText4_1}</li>
                                <hr/>
                                <li>{texts[language].aboutPageText4_2}</li>
                                <hr/>
                                <li>{texts[language].aboutPageText4_3}</li>
                                <hr/>
                                <li>{texts[language].aboutPageText4_4}</li>
                                <hr/>
                                <li>{texts[language].aboutPageText4_5}</li>
                            </ul>
                            <img loading={"lazy"} src={image5} className={"about-section3-image"} alt={''}/>
                        </div>
                    </div>

                </div>

                <div className={"about-part2-mobile"}>
                    <AboutCardMobile title={texts[language].aboutPageHeading2} imageSrc={image3} text={texts[language].aboutPageText2} readMore={texts[language].readMore}/>
                    <div className={"hor-line"}><hr/></div>
                    <AboutCardMobile title={texts[language].aboutPageHeading3} imageSrc={image4} text={texts[language].aboutPageText3} readMore={texts[language].readMore}/>
                    <div className={"hor-line"}><hr/></div>
                    <AboutCardMobile title={texts[language].aboutPageHeading4} imageSrc={image5} text={texts[language].aboutPageText4} readMore={texts[language].readMore}/>
                </div>
            </div>

            <Footer
                field1={texts[language].footerHomePage} field2={texts[language].footerOurDivisions} field3={texts[language].footerContactUs}
                field4={texts[language].footerContactField} field5={texts[language].footerEmailField} field6={texts[language].footerLocationField} field7={texts[language].footerWorkingTimeField} field8={texts[language].footerWorkingTimeDays}
                navigate1={'/'} navigate2={'/Divisions'} navigate3={'/Contact'}
            />


            <FooterMobile
                field1={texts[language].footerHomePage} field2={texts[language].footerOurDivisions} field3={texts[language].footerContactUs}
                field4={texts[language].footerContactField} field5={texts[language].footerEmailField} field6={texts[language].footerLocationField} field7={texts[language].footerWorkingTimeField} field8={texts[language].footerWorkingTimeDays}
                navigate1={'/'} navigate2={'/Divisions'} navigate3={'/Contact'}
            />

        </div>
    );
}

export default About;