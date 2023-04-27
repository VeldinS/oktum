import React from 'react';

import "../../divizije-page/divisions.css";
import {useNavigate} from "react-router-dom";

interface CardProps{
    span: string;
    imageSrc: string;
    text: string;
    navigate: string;
}

function DivisionsCard(props: CardProps) {

    const navigate = useNavigate();

    return (
        <div onClick={() => navigate(props.navigate)} className="divisions1-card">
            <img className={"divisions-card-image"} src={props.imageSrc} loading={"lazy"} alt={props.span}/>
            <span>{props.span}</span>
            <div className="hover-text">{props.text}</div>
        </div>
    );
}

export default DivisionsCard;