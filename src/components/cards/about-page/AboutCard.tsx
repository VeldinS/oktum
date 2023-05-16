import React, {useState} from 'react';

import "./aboutCard.css";

interface CardProps{
    title: string;
    imageSrc: string;
    text: string;
}


function AboutCard(props: CardProps) {
    const [showDetails, setShowDetails ] = useState(false);
    return (
        <div className={"cardAbout"} onMouseEnter={() => {setShowDetails(true)}} onMouseLeave={() => {setShowDetails(false)}}>
            <img className={"cardImgAbout"} src={props.imageSrc} alt={props.title}/>
            <p className={"cardTextAbout"} style={!showDetails ? {fontWeight: "bold", letterSpacing: "5px", fontSize:"120%"} : {}}>{showDetails ? props.text : props.title}</p>
        </div>
    );
}

export default AboutCard;