import React from "react";
import { Link } from "react-router-dom";


function ColorList({colors}) {
    const colorLinks = Object.keys(colors).map(color => (
        <li key={color}>
          <Link to={`/colors/${color}`}>{color}</Link>
        </li>
    ));
    return (
        <div className="ColorList">
            <h1>Welcome to the color factory!</h1>
            <Link to={"/colors/new"}>Add a color</Link>
            <ul>{colorLinks}</ul>
        </div>
    );
}

export default ColorList;