import React from "react";
import './cn.css';
import ciscotut from '../src/assets/Cisco_packet_Tracker.mp4';
import exp1 from '../src/assets/Exp1.pkt'
import exp2a from '../src/assets/Exp2_a.pkt'
import exp2b from '../src/assets/Exp2_b.pkt'
import exp3 from '../src/assets/Exp3.pkt'
import exp4_bus from '../src/assets/Exp4_bus.pkt'
import exp4_hybrid from '../src/assets/Exp4_hybrid.pkt'
import exp4_mesh from '../src/assets/Exp4_mesh.pkt'
import exp4_ring from '../src/assets/Exp4_ring.pkt'
import exp4_star from '../src/assets/Exp4_star.pkt'
import exp5 from '../src/assets/Exp5_a.pkt'
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
            <video src={ciscotut} controls poster="https://www.packettracernetwork.com/images/packettracer800/packettracer-80-splash.jpg" preload="none"/>
            <div className="lab">
                <p>Lab experiments .pkt files : </p>
                <a href={exp1}>Exp 1</a>
                <a href={exp2a}>Exp 2a</a>
                <a href={exp2b}>Exp 2b</a>
                <a href={exp3}>Exp 3</a>
                <a href={exp4_bus}>Exp 4-bus</a>
                <a href={exp4_hybrid}>Exp 4-hybrid</a>
                <a href={exp4_mesh}>Exp 4-mesh</a>
                <a href={exp4_ring}>Exp 4-ring</a>
                <a href={exp4_star}>Exp 4-star</a>
                <a href={exp5}>Exp 5</a>
            </div>
        </div>
        
        <div className="footer">
            <h3>Made by Abhi with React Js</h3>
        </div>
    </div>
    </>
}

export default Cn;