import React from "react";
import { useParams, Redirect } from "react-router-dom";

function Color({colors}) {
    const { color } = useParams();
    const pageColor = colors[color];
    
    if (!color) return <Redirect to="/colors"/>

    return (
        <div className="Color" style={{backgroundColor: pageColor, height: '100vh'}}>
            <h1>This is the color {color}</h1>
        </div>
    );
}

export default Color;