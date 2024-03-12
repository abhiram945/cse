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
        <div className="exp exp5">
            <h3>Experiment 5</h3>
            <h3>Download all these 3 files</h3>
            <div className="downloadButtonsContainer">
                <a href="https://excellmedia.dl.sourceforge.net/project/gnuwin32/flex/2.5.4a-1/flex-2.5.4a-1.exe" rel='noreferrer' target='_blank'>download Flex 2.5.4a</a>
                <a href="https://excellmedia.dl.sourceforge.net/project/gnuwin32/bison/2.4.1/bison-2.4.1-setup.exe" rel='noreferrer' target='_blank'>download Bison 2.4.1</a>
                <a href="https://excellmedia.dl.sourceforge.net/project/embarcadero-devcpp/v6.3/Embarcadero_Dev-Cpp_6.3_TDM-GCC_9.2_Setup.exe" rel='noreferrer' target='_blank'>download Dev C++</a>
            </div>
            <div className="instructionsContainer">
                <h3>Follow these instructions after downloading the softwares</h3>
                <p>
                    1.	Install Flex at “C:\GnuWin32”<br/>
                    2.	Install Bison at “C:\GnuWin32”<br/>
                    3.	Install DevC++ at “C:\Dev-Cpp”<br/>
                </p>
                <hr/>
                <p className="environmentVariablesSetting">
                    Type "Environment Variable" in windows search<br/>
                    press Enter<br/>
                    click on Environment Variables<br/>
                    click on Path under System Variables<br/>
                    Edit -- new<br/>
                    paste the follwing(in different sections)<br/>
                    1. C:\GnuWin32\bin<br/>
                    2. C:\Dev-Cpp\TDM-GCC-64\bin
                </p>
            </div>
        </div>
    </div>
}
export default Cd;