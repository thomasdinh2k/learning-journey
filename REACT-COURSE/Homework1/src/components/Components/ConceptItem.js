import React from "react";
import "./Concepts.css";

const ConceptItem = (props) => {
    return (
        <ul id="concepts">
            <li className="concept">
                <img src={props.image} alt={props.title}/>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </li>
        </ul>
    );
}

export default ConceptItem