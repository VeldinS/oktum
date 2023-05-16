import React, { useState } from 'react';
import "./divisionCardMobile.css";

interface CardProps {
    title: string;
    imageSrc: string;
    text: string;
    readMore: string;
}

function DivisionCardMobile(props: CardProps) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className={`card-div1 division-card-mobile ${isFlipped ? 'flip' : 'flip1'}`}>
            <div className="content-div1">
                <div className="front-div1 card-front" onClick={handleClick}>
                    <img  className="cardImgDivisionsMobile" src={props.imageSrc} alt={props.title} />
                    <h3 className="cardTitleDivisionsMobile">{props.title}</h3>
                    <p className="read-more">{props.readMore}</p>
                </div>
                <div className="back-div1 card-back" onClick={handleClick}>
                    <img className="cardImgDivisionsMobile" src={props.imageSrc} alt={props.title} />
                    <p className="description-div1 division-card-mobile-p">{props.text}</p>
                </div>
            </div>
        </div>
    );
}

export default DivisionCardMobile;
