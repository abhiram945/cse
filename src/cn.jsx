import React from "react";
import './cn.css';
import ciscotut from '../src/assets/Cisco_packet_Tracker.mp4';
const Cn=()=>{
    return <>
    <div className="cse">
        <div className="cn" id="cn">
            <h2>Computer Networks</h2>
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
            <p>Watch the complete video first then try to install.</p>
            <video src={ciscotut} controls poster="https://www.packettracernetwork.com/images/packettracer800/packettracer-80-splash.jpg" preload="none"/>
        </div>
        
        <div className="footer">
            <h3>Made with React Js</h3>
        </div>
    </div>
    </>
}

export default Cn;