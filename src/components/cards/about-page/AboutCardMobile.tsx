import React, {useState} from 'react';

import "../../about-page/about.css";

interface CardProps{
    title: string;
    imageSrc: string;
    text: string;
    readMore: string;
}


function AboutCardMobile(props: CardProps) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };


    return (
        <div className={`card-div1 card-div2 division-card-mobile ${isFlipped ? 'flip' : ''}`} onClick={handleClick}>
            <div className="content-div1">
                <div className="front-div1 front-div2 card-front">
                    <img className="cardImgDivisionsMobile" src={props.imageSrc} alt={props.title} />
                    <h3 className="cardTitleDivisionsMobile">{props.title}</h3>
                    <p className="read-more">{props.readMore}</p>
                </div>
                <div className='back-div1 back-div2 card-back'>
                    <img className="cardImgDivisionsMobile" src={props.imageSrc} alt={props.title} />
                    <p style={{padding: "10px"}} className="description-div1 division-card-mobile-p">{props.text}</p>
                </div>
            </div>
        </div>
    );
}

export default AboutCardMobile;