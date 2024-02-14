import React from "react";
import './cd.css';
import importAll from "./import.jsx";
const Cd=()=>{
    const exp3images = importAll(require.context('../public/assets/cd/exp3', false, /\.(png|jpe?g|svg)$/));
    const exp4images = importAll(require.context('../public/assets/cd/exp4', false, /\.(png|jpe?g|svg)$/));
    return <div className="cd">
        <h2>Compiler Design Lab outputs</h2>
        <div className="exp exp3">
            <h3>Experminet 3</h3>
            <div className="images">
            {Object.keys(exp3images).map((imageName, index) => (
                <img key={index} src={`./assets/cd/exp3/${imageName}`} alt={imageName} />
            ))}
            </div>
        </div>
        <div className="exp exp4">
            <h3>Experminet 4</h3>
            <div className="images">
            {Object.keys(exp4images).map((imageName, index) => (
                <img key={index} src={`./assets/cd/exp4/${imageName}`} alt={imageName} />
            ))}
            </div>
        </div>
    </div>
}
export default Cd;