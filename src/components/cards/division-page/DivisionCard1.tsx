import React from 'react';

import "./divisionCard.css";

interface CardProps{
    title: string;
    imageSrc: string;
    text: string;
}


function DivisionCard1(props: CardProps) {
    return (
        <div className={"cardDivisions1"}>
            <img className={"cardImgDivisions1"} src={props.imageSrc} loading={"lazy"} alt={props.title}/>
            <p className={"cardTextDivisions1"}>{props.text}</p>
            <h2 className={"cardTitleDivisions1"}>{props.title}</h2>
        </div>
    );
}

export default DivisionCard1;