import React, { useState } from "react";
import './cn.css';
import importAll from "./import";
const Cn=()=>{
    const [seeMore, setSeeMore] =useState(false);
    const pktFiles = importAll(require.context('../public/assets/cn/pkt', false, /\.pkt$/));
    return <>
    <div className="cse">
        <div className="cn">
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
            <p>Lab experiments .pkt files : </p>
            <div className="pktFilesContainer">
                {Object.keys(pktFiles).map((pktFile, index) => (
                    <a key={index} href={`./assets/cn/pkt/${pktFile}`} alt={pktFile}>{pktFile.split('.')[0]}</a>
                ))}
            </div>
            <div className="handWritten">
                <p>Handwritten PDFs</p>
                <div className="pdfsContainer">
                    <embed type="application/pdf" title="pdf" src="./assets/cn/handWritten/Cn_exp6.pdf"/>
                    <embed type="application/pdf" title="pdf" src="./assets/cn/handWritten/Cn_exp7.pdf"/>
                </div>
            </div>
            <div className="outputs">
                <p>Experiment outputs PDFs</p>
                <div className="pdfsContainer">
                    {
                        seeMore ? 
                        <><embed type="application/pdf" title="pdf" src="./assets/cn/outputs/Cn_exp6.pdf"/>
                        <embed type="application/pdf" title="pdf" src="./assets/cn/outputs/Cn_exp7a_b.pdf"/></>
                        :<button onClick={()=>setSeeMore(true)}>Show PDFs</button>
                    }
                </div>
            </div>
        </div>
    </div>
    </>
}

export default Cn;