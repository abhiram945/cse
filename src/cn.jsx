import React from "react";
import './cn.css';
import importAll from "./import";
const Cn=()=>{
    const pktFiles = importAll(require.context('../public/assets/cn/pkt', false, /\.pkt$/));
    const exp6Handwritten = importAll(require.context('../public/assets/cn/handWritten/exp6', false, /\.(png|jpe?g|svg)$/))
    return <>
    <div className="cse">
        <div className="cn" id="cn">
            <h2>COMPUTER NETWORKS</h2>
            <p>A guide to install CISCO PACKET TRACKER</p>
            <button>
                <a href="https://ia601604.us.archive.org/20/items/cisco-packet-tracer-821-ubuntu-64bit/CiscoPacketTracer_821_Windows_64bit.exe">
                    Download Cisco Packet Tracker 8.2.1 for windows
                </a>
            </button>
            <button>
                <a href="https://archive.org/download/cisco-packet-tracer-821-ubuntu-64bit/CiscoPacketTracer_821_MacOS_64bit.dmg">
                    Download Cisco Packet Tracker 8.2.1 for Mac
                </a>
            </button>
            <p>Download the setup file and follow the instructions as shown in the following video tutorial</p>
            <video src='./assets/cn/Cisco_packet_Tracker.mp4' controls poster="https://www.packettracernetwork.com/images/packettracer800/packettracer-80-splash.jpg" preload="none"/>
            <div className="lab">
                <p>Lab experiments .pkt files : </p>
                {Object.keys(pktFiles).map((pktFile, index) => (
                    <a key={index} href={`./assets/cn/pkt/${pktFile}`} alt={pktFile}>{pktFile.split('.')[0]}</a>
                ))}
            </div>
            <div className="handWritten">
                <p>Handwritten lab</p>
                <div className="exp">
                    {Object.keys(exp6Handwritten).map((each, index) => (
                        <img key={index} src={`./assets/cn/handWritten/exp6/${each}`} alt={each}/>
                    ))}
                </div>
            </div>
        </div>
    </div>
    </>
}

export default Cn;