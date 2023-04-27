import React from 'react';

import "./divisionCard.css";

interface CardProps{
    title: string;
    imageSrc: string;
    text: string;
}


function DivisionCard(props: CardProps) {
    return (
        <div className={"cardDivisions"}>
            <img className={"cardImgDivisions"} src={props.imageSrc} loading={"lazy"} alt={props.title}/>
            <h2 className={"cardTitleDivisions"}>{props.title}</h2>
            <p className={"cardTextDivisions"}>{props.text}</p>
        </div>
    );
}

export default DivisionCard;