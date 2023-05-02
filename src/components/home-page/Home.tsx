import React, {useEffect, useState} from 'react';
import emailjs from '@emailjs/browser'
import {useNavigate} from 'react-router-dom';
import {hideOverlay, showOverlay, toggleLanguagefunction, toggleLanguageMobilefunction, useHamburgerScroll, useNavbarImageScroll, useNavbarScroll} from "../../functions/helpers";

import {texts} from "../../languages/language";

import './home.css'
import 'bootstrap/dist/css/bootstrap.css';

import image1 from '../../images/background.webp'
import image2 from '../../images/logo.webp'
import image3 from '../../images/home-page-about-background.webp'
import image4 from '../../images/logistics-page-part1.webp'
import image5 from '../../images/divisions-agro-background.webp'
import image6 from '../../images/divisions-finance-background.webp'
import image7 from '../../images/divisions-logistics-background.webp'
import image9 from '../../images/cancel.apng'
import image10 from '../../images/home-page-background-mobile.webp';
import image11 from '../../images/divisions-agro-background-R.webp'
import image12 from '../../images/divisions-finance-background-R.webp'
import image13 from '../../images/divisions-logistics-background-R.webp'
import image14 from '../../images/bosnian-flag.webp'
import image15 from '../../images/english-flag.webp'
import image16 from '../../images/about-page-section3.webp'
import image17 from '../../images/agrar-page-part3.webp'
import Footer from "../UI Elements/Footer";
import FooterMobile from "../UI Elements/FooterMobile";
import toast, {Toaster} from "react-hot-toast";

const Home = () => {

    function getFlagImageUrl(language:any) {
        switch (language) {
            case 'english':
                return image14;
            case 'bosnian':
                return image15;
        }
    }

    //GENERAL
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, []);


    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    //FORM
    const [formData, setFormData] = useState({
        name: '-',
        email: '',
        message: ''
    });
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        emailjs.sendForm('service_qy1382c', 'template_0wa2sh8', '#myForm', '2zN-nEZKG9w_JTp6c')
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
                console.log('FAILED...', error);
            });
        if(language == 'bosnian'){
            toast.success('Poruka uspješno poslana!', {style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                }});
        }
        else if(language == 'english'){
            toast.success('Message successfully sent!', {style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                }});
        }
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    //BACKGROUND IMAGE
    const [bgImage, setBgImage] = useState(image1);
    const mediaQuery = window.matchMedia('(min-width: 500px)');
    useEffect(() => {
        const changeBackground = () => {
            if (mediaQuery.matches) {
                setBgImage(image1);
            } else {
                setBgImage(image10);
            }
        };
        changeBackground();
        mediaQuery.addListener(changeBackground);
        return () => {
            mediaQuery.removeListener(changeBackground);
        };
    }, []);

    //LANGUAGE
    const [language, setLanguage] = useState(localStorage.getItem("language") || "bosnian");
    const toggleLanguage = () => {
        toggleLanguagefunction(language, setLanguage)
    }
    const toggleLanguageMobile = () => {
        toggleLanguageMobilefunction(language, setLanguage)
    }

    //ON-SCROLL FOR NAVIGATION BAR
    useHamburgerScroll()
    useNavbarScroll()
    useNavbarImageScroll()

    //MOBILE OVERLAY
    showOverlay()
    hideOverlay()

    return (
        <div className={"home-page"}>
            <div className={"home-page-main"} style={{ backgroundImage: `linear-gradient(rgba(0,0,0,.75), rgba(0,0,0,.65)), url(${bgImage})`, backgroundSize: "100% auto", position: "relative", backgroundRepeat:"no-repeat", height: "100vh" }}>
                <div className={"home-page-header"}>
                    <div className={"header-row"}>
                        <nav className="navbar">
                            <div id={"navbar-items"} className="navbar-items">
                                <div className="navbar-item navbar-item1">
                                    <p onClick={() => navigate('/About')} className={"navbar-text1"}>{texts[language].aboutButton}</p>
                                    <div className="dropdown-content">
                                        <a onClick={() => navigate('/About', { state: { scrollToId: 'o_firmi'}})}>{texts[language].aboutButton1}</a>
                                        <a onClick={() => navigate('/About', { state: { scrollToId: 'misija_i_vizija'}})}>{texts[language].aboutButton2}</a>
                                        <a onClick={() => navigate('/About', { state: { scrollToId: 'naši_rezultati'}})}>{texts[language].aboutButton3}</a>
                                    </div>
                                </div>
                                <div className="navbar-item navbar-item1">
                                    <p onClick={() => navigate('/Divisions')} className={"navbar-text1"}>{texts[language].divisionsButton}</p>
                                    <div className="dropdown-content">
                                        <a onClick={() => navigate('/Divisions/Agrar')}>{texts[language].divisionsButton1}</a>
                                        <a onClick={() => navigate('/Divisions/Finansije')}>{texts[language].divisionsButton2}</a>
                                        <a onClick={() => navigate('/Divisions/Logistika')}>{texts[language].divisionsButton3}</a>
                                    </div>
                                </div>
                                <div className="navbar-item navbar-item-image">
                                    <img id={"navbar-image"} src={image2} className={"logo-image navbar-logo"} alt="Logo" onClick={scrollToTop} />
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
                            <label onClick={showOverlay} id={"hamburger"} className="hamburger">
                                <input type="checkbox"/>
                                    <svg viewBox="0 0 32 32">
                                        <path className="line line-top-bottom"
                                              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                                        <path className="line" d="M7 16 27 16"></path>
                                    </svg>
                            </label>
                        </nav>
                    </div>
                </div>

                <div id="overlay">
                    <div className="text-container">
                        <p onClick={() => navigate('/About')} className={"navbar-text1"}>{texts[language].aboutButton}</p>
                        <br/>
                        <p onClick={() => navigate('/Divisions')} className={"navbar-text1"}>{texts[language].divisionsButton}</p>
                        <br/>
                        <p onClick={() => navigate('/Contact')} className={"navbar-text1"}>{texts[language].contactButton}</p>
                        <br/>
                        <div style={{display:"flex", flexDirection:"row", alignItems:"center", marginBottom:"10px"}}>
                            <p style={{paddingRight: "5px", margin:"auto"}} onClick={toggleLanguageMobile}>{texts[language].button}</p>
                            <img className={"language-image"} src={getFlagImageUrl(language)} alt={language + ' flag'}/>
                        </div>
                        <img onClick={hideOverlay} className={"close-button"} src={image9} alt={"/"}/>
                    </div>
                </div>

                <div className={"home-page-heading-div word-waves"}>
                    <h1 className={"home-page-heading"} >OKTUM</h1>
                </div>
            </div>

            <div className={"about-part"} style={{backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.3), rgba(0,0,0,0.5) 30%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.9)), url(${image3})`,backgroundAttachment: "fixed", backgroundSize: "cover", height: "max-content", backgroundPosition: "center bottom" }}>
                <div className="home-page-about-container d-flex flex-column">
                    <div className={"home-page-about-row"}>
                        <div className={"home-page-about-image-container"}>
                            <div className="cards-home-about">
                                <div className="card-home-about one" style={{ backgroundImage:  `linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.5)), url(${image17})`, backgroundSize: "cover"}}>
                                    <div className="cardDetails">
                                        <div className="cardDetailsHaeder">{texts[language].homePageAgrarHeading}</div>
                                    </div>
                                </div>
                                <div className="card-home-about two" style={{ backgroundImage:  `linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.5)), url(${image16})`, backgroundSize: "cover"}}>
                                    <div className="cardDetails">
                                        <div className="cardDetailsHaeder">{texts[language].homePageFinanceHeading}</div>
                                    </div>
                                </div>
                                <div className="card-home-about three" style={{ backgroundImage:  `linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.5)), url(${image4})`, backgroundSize: "cover", backgroundPosition: "center"}}>
                                    <div className="cardDetails">
                                        <div className="cardDetailsHaeder">TRANSPORT</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id={"aboutDiv"} className={"home-page-about-text-container"}>
                            <h1 className={"home-page-about-header"}>{texts[language].aboutHeading}</h1>
                            <div className={"home-page-about-paragraph-container"}>
                                <p>{texts[language].aboutText}</p>
                            </div>
                            <div className={"home-page-about-button"}>
                                <button onClick={() => navigate('/About')} className="learn-more">
                                              <span className="circle" aria-hidden="true">
                                              <span className="icon arrow"></span>
                                              </span>
                                    <span className="button-text">{texts[language].homePageAboutButton}</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={"home-page-divisions-row"}>
                        <h1 className={"home-page-contact-header text-center"}>{texts[language].homePageDivisions}</h1>
                        <p className={"home-page-divisions-text"}>{texts[language].homePageDivisionsText}</p>
                    </div>

                    <div className="cards-mobile">
                        <p style={{ backgroundImage:  `linear-gradient(rgba(0,0,0,.75), rgba(0,0,0,.75)), url(${image5})`, backgroundSize: "cover"}}><span onClick={() => navigate('/Divisions/Agrar')}>{texts[language].homePageAgrarHeading}</span></p>
                        <p style={{ backgroundImage:  `linear-gradient(rgba(0,0,0,.75), rgba(0,0,0,.75)), url(${image6})`, backgroundSize: "cover", backgroundPosition: "center center"}}><span onClick={() => navigate('/Divisions/Finansije')}>{texts[language].homePageFinanceHeading}</span></p>
                        <p style={{ backgroundImage:  `linear-gradient(rgba(0,0,0,.75), rgba(0,0,0,.75)), url(${image7})`, backgroundSize: "cover", backgroundPosition: "center bottom"}}><span onClick={() => navigate('/Divisions/Logistika')}>{texts[language].homePageLogisticsHeading}</span></p>
                    </div>

                    <div className={"home-page-divisions-row2"}>
                        <div className="card-div">
                            <div className="content-div">
                                <div className="front-div" style={{ backgroundImage:  `linear-gradient(rgba(0,0,0,.75), rgba(0,0,0,.75)), url(${image5})`, backgroundSize: "cover"}}>
                                    <h3 className="title-div">{texts[language].homePageAgrarHeading}</h3>
                                </div>

                                <div className="back-div" style={{ backgroundImage:  `linear-gradient(rgba(0,0,0,.85), rgba(0,0,0,.85)), url(${image11})`, backgroundSize: "cover"}}>
                                    <p className="description-div">
                                        {texts[language].homePageAgrarText}
                                    </p>
                                    <button onClick={() => navigate('/Divisions/Agrar')} className="learn-more">
                                              <span className="circle" aria-hidden="true">
                                              <span className="icon arrow"></span>
                                              </span>
                                        <span className="button-text">{texts[language].homePageAgrarHeading}</span>
                                    </button>
                                </div>
                            </div>
                        </div>


                        <div className="card-div">
                            <div className="content-div">
                                <div className="front-div" style={{ backgroundImage:  `linear-gradient(rgba(0,0,0,.75), rgba(0,0,0,.75)), url(${image6})`, backgroundSize: "cover", backgroundPosition: "center center"}}>
                                    <h3 className="title-div">{texts[language].homePageFinanceHeading}</h3>
                                </div>

                                <div className="back-div" style={{ backgroundImage:  `linear-gradient(rgba(0,0,0,.85), rgba(0,0,0,.85)), url(${image12})`, backgroundSize: "cover", backgroundPosition: "center center"}}>
                                    <p className="description-div">
                                        {texts[language].homePageFinanceText}
                                    </p>
                                    <button onClick={() => navigate('/Divisions/Finansije')} className="learn-more">
                                              <span className="circle" aria-hidden="true">
                                              <span className="icon arrow"></span>
                                              </span>
                                        <span className="button-text">{texts[language].homePageFinanceHeading}</span>
                                    </button>
                                </div>
                            </div>
                        </div>


                        <div className="card-div">
                            <div className="content-div">
                                <div className="front-div" style={{ backgroundImage:  `linear-gradient(rgba(0,0,0,.75), rgba(0,0,0,.75)), url(${image7})`, backgroundSize: "cover",backgroundPosition: "center bottom"}}>
                                    <h3 className="title-div">{texts[language].homePageLogisticsHeading}</h3>
                                </div>

                                <div className="back-div" style={{ backgroundImage:  `linear-gradient(rgba(0,0,0,.85), rgba(0,0,0,.85)), url(${image13})`, backgroundSize: "cover",backgroundPosition: "center bottom"}}>
                                    <p className="description-div">
                                        {texts[language].homePageLogisticsText}
                                    </p>
                                    <button onClick={() => navigate('/Divisions/Logistika')} className="learn-more">
                                              <span className="circle" aria-hidden="true">
                                              <span className="icon arrow"></span>
                                              </span>
                                        <span className="button-text">{texts[language].homePageLogisticsHeading}</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className={"home-page-contact"}>
                        <h1 className={"home-page-contact-header"}>{texts[language].homePageContactHeading}</h1>
                        <div className="home-page-divisions-mainCard">
                            <div className="login-box">
                                <form onSubmit={handleSubmit} id={"myForm"}>
                                    <div className="user-box">
                                        <input name={'email'} value={formData.email} onChange={handleChange} type="text"  required={true}/>
                                            <label>{texts[language].homePageContactField1}</label>
                                    </div>
                                    <div className="user-box">
                                        <input name={'message'} value={formData.message} onChange={handleChange} type="text" required={true}/>
                                            <label>{texts[language].homePageContactField2}</label>
                                    </div>
                                    <center>
                                        <button type={"submit"}>
                                            <a className={"home-page-contact-button"}>
                                                {texts[language].homePageContactButton}
                                                <span></span>
                                            </a>
                                        </button>
                                    </center>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer
                field1={texts[language].footerAboutUs} field2={texts[language].footerOurDivisions} field3={texts[language].footerContactUs}
                field4={texts[language].footerContactField} field5={texts[language].footerEmailField} field6={texts[language].footerLocationField} field7={texts[language].footerWorkingTimeField} field8={texts[language].footerWorkingTimeDays}
                navigate1={'/About'} navigate2={'/Divisions'} navigate3={'/Contact'}
            />


            <FooterMobile
                field1={texts[language].footerAboutUs} field2={texts[language].footerOurDivisions} field3={texts[language].footerContactUs}
                field4={texts[language].footerContactField} field5={texts[language].footerEmailField} field6={texts[language].footerLocationField} field7={texts[language].footerWorkingTimeField} field8={texts[language].footerWorkingTimeDays}
                navigate1={'/About'} navigate2={'/Divisions'} navigate3={'/Contact'}
            />
            <Toaster/>
        </div>
    );
}

export default Home;