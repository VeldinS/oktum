import React, {useEffect, useRef, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";

import {texts} from "../../languages/language";

import './contact.css'

import image1 from "../../images/contact-page-background.webp";
import image2 from "../../images/logo.webp";
import image3 from "../../images/phone.apng";
import image4 from "../../images/mail.apng";
import image5 from "../../images/location.apng";
import image6 from "../../images/clock.apng";
import image7 from "../../images/cancel.apng";
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
import toast, {Toaster} from "react-hot-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {

    function getFlagImageUrl(language:any) {
        switch (language) {
            case 'english':
                return image14;
            case 'bosnian':
                return image15;
        }
    }

    //FORM
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    }
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        emailjs.sendForm('service_qy1382c', 'template_0wa2sh8', '#myForm1', '2zN-nEZKG9w_JTp6c')
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

    const locationUseRef = useRef(null);
    const location = useLocation();
    useEffect(() => {
        if (location.state?.scrollToId) {
            const scrollToElement = document.getElementById(location.state.scrollToId);
            if (scrollToElement) {
                scrollToElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    }, [location.state?.scrollToId]);


    return (
        <div>
            <div className={"contact-page-main"} style={{backgroundImage:  `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,.65)), url(${image1})`, backgroundSize: "cover", backgroundAttachment: "fixed", backgroundPosition: "center center"}}>
                <div className={"about-page-first"}>
                    <div className={"home-page-header"}>
                        <div className={"header-row"}>
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
                                        <div className="dropdown-content dropdown-content-contact">
                                            <a onClick={() => navigate('/About', { state: { scrollToId: 'o_firmi'}})}>{texts[language].aboutButton1}</a>
                                            <a onClick={() => navigate('/About', { state: { scrollToId: 'misija_i_vizija'}})}>{texts[language].aboutButton2}</a>
                                            <a onClick={() => navigate('/About', { state: { scrollToId: 'naši_rezultati'}})}>{texts[language].aboutButton3}</a>
                                        </div>
                                    </div>
                                    <div className="navbar-item navbar-item1">
                                        <p onClick={() => navigate('/Divisions')} className={"navbar-text1"}>{texts[language].divisionsButton}</p>
                                        <div className="dropdown-content dropdown-content-contact">
                                            <a onClick={() => navigate('/Divisions/Agrar')}>{texts[language].divisionsButton1}</a>
                                            <a onClick={() => navigate('/Divisions/Finansije')}>{texts[language].divisionsButton2}</a>
                                            <a onClick={() => navigate('/Divisions/Logistika')}>{texts[language].divisionsButton3}</a>
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
                                <p onClick={() => navigate('/Divisions')} className={"navbar-text1"}>{texts[language].divisionsButton}</p>
                                <br/>
                                <div style={{display:"flex", flexDirection:"row", alignItems:"center", marginBottom:"10px"}}>
                                    <p style={{paddingRight: "5px", margin:"auto"}} onClick={toggleLanguageMobileAbout}>{texts[language].button}</p>
                                    <img className={"language-image"} src={getFlagImageUrl(language)} alt={language + ' flag'}/>
                                </div>
                                <img onClick={hideAboutOverlay} className={"close-button"} src={image7} alt={"/"}/>
                            </div>
                        </div>
                    </div>
                    <div className={"contact-page-formRow"}>
                        <div className={"contact-page-info"}>
                                <img src={image3} className={"contact-image"} alt={""}/>
                                <p>+387(0) 33 861 593</p>
                                <p>+387(0) 33 837 919</p>
                                <img src={image4} className={"contact-image"} alt={""}/>
                                <p>info@oktum.ba</p>
                                <p>finance@oktum.ba</p>
                                <p>agrar@oktum.ba</p>
                            <img src={image5} className={"contact-image"} alt={""}/>
                                <p>Vilsonovo šetalište 6, 71000 Sarajevo </p>
                                <img src={image6} className={"contact-image"} alt={""}/>
                                <p>{texts[language].footerWorkingTime}</p>
                        </div>
                        <div className={"contact-page-form"}>
                            <div className="container">
                                <form onSubmit={handleSubmit} id={"myForm1"}>
                                    <div className="contact-card">
                                        <a className="contact-signup">{texts[language].contactPageFormHeading}</a>
                                        <div className="inputBox1">
                                            <input name={'name'} value={formData.name} onChange={handleChange} type="text" required={true}/>
                                                <span className="user">{texts[language].contactPageFormField1}</span>
                                        </div>

                                        <div className="inputBox">
                                            <input name={'email'} value={formData.email} onChange={handleChange} type="text" required={true}/>
                                                <span>{texts[language].contactPageFormField2}</span>
                                        </div>

                                        <div className="inputBox">
                                            <input name={'message'} value={formData.message} onChange={handleChange} type="text" required={true}/>
                                                <span>{texts[language].contactPageFormField3}</span>
                                        </div>

                                        <button type={"submit"} className="enter contactPage-button">{texts[language].contactPageFormButton}</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div ref={locationUseRef} id={'locationMap'} className={"locationBox"}>
                        <address>
                            <iframe className={"locationBox"}
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11508.417995642705!2d18.4043741!3d43.8536627!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758c9daf1a9ae61%3A0xa80b3e16f192a6c9!2sOKTUM%20d.o.o.!5e0!3m2!1sen!2sba!4v1679181891211!5m2!1sen!2sba"
                                    width="600" height="450" loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </address>
                    </div>

                    <Footer
                        field1={texts[language].footerHomePage} field2={texts[language].footerAboutUs} field3={texts[language].footerOurDivisions}
                        field4={texts[language].footerContactField} field5={texts[language].footerEmailField} field6={texts[language].footerLocationField} field7={texts[language].footerWorkingTimeField} field8={texts[language].footerWorkingTimeDays}
                        navigate1={'/'} navigate2={'/About'} navigate3={'/Divisions'}
                    />

                    <FooterMobile
                        field1={texts[language].footerHomePage} field2={texts[language].footerAboutUs} field3={texts[language].footerOurDivisions}
                        field4={texts[language].footerContactField} field5={texts[language].footerEmailField} field6={texts[language].footerLocationField} field7={texts[language].footerWorkingTimeField} field8={texts[language].footerWorkingTimeDays}
                        navigate1={'/'} navigate2={'/About'} navigate3={'/Divisions'}
                    />
                    <Toaster/>
                </div>
            </div>
        </div>
    );
}

export default Contact;