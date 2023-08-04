import React from "react";
import './Card.css'

const Card = ({id , work , name}) => {
    return (
        <div className="divi dib tc br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${name}?set=set5`} alt="Fhoto of Matin" />
            <div >
                <h2 className="sizeh">{name}</h2>
                <p className="sizep">{work}</p>                
            </div>
        </div>
    );
};



export default Card;