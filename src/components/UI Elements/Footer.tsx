import React from 'react';

import '../home-page/home.css'

import image2 from "../../images/logo.webp";
import {scrollToTop} from "../../functions/helpers";
import {useNavigate} from "react-router-dom";

interface footerFields{
    field1: string,
    field2: string,
    field3: string,
    field4: string,
    field5: string,
    field6: string,
    field7: string,
    field8: string,
    navigate1: string,
    navigate2: string,
    navigate3: string,
}

const Footer = (props: footerFields) => {

    const navigate = useNavigate()

    return (
        <div>
            <footer className={"home-page-footer"}>
                <div className={"footer-row "}>
                    <div className={"column1"}>
                        <img id={"navbar-image"} src={image2} className={"logo-image-footer navbar-logo"} alt="Logo" onClick={scrollToTop}/>
                    </div>
                    <div className={"column2"}>
                        <p className={"footer-text"} onClick={() => navigate(props.navigate1)}>{props.field1}</p>
                        <p className={"footer-text"} onClick={() => navigate(props.navigate2)}>{props.field2}</p>
                        <p className={"footer-text"} onClick=   {() => navigate(props.navigate3)}>{props.field3}</p>
                    </div>
                    <div className={"column3"}>
                        <h5>{props.field4}</h5>
                        <p>+387(0) 33 861 593</p>
                        <p>+387(0) 33 837 919</p>
                    </div>
                    <div className={"column4"}>
                        <h5>{props.field5}</h5>
                        <p>info@oktum.ba</p>
                        <p>finance@oktum.ba</p>
                        <p>agrar@oktum.ba</p>
                    </div>
                    <div className={"column5"}>
                        <h5>{props.field6}</h5>
                        <p>Vilsonovo šetalište 6</p>
                        <p>71000 Sarajevo</p>
                        <h5>{props.field7}</h5>
                        <p>{props.field8} | 08h-16h</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;