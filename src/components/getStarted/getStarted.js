import React, { useState } from 'react';
import './getStarted.css';

const GetStarted=(props)=>{
    const [url,setUrl]=useState("https://www.youtube.com/embed/D4jj3HHrnSU?enablejsapi=1");
    const [active,setActive]=useState(0);
    const content=["System Calls","Virtual Memory","Registers","Addressing Modes","Types Of instructions","ISA","Floating Point Arithmetic","ALU","Cache","Locality","Cache Replacement Policy","Page Table","TLB","Pipeline","Hazards","IPC","Process Scheduling Algorithm","Preemption","Priority inversions","Interrupts","Profiling","File Systems","Links","Belady's Anomaly","Setuid bit"];
    const urlArray=["https://www.youtube.com/embed/D4jj3HHrnSU?enablejsapi=1","https://www.youtube.com/embed/2HVKizgcfjo?enablejsapi=1","https://www.youtube.com/embed/MKSQYsLLFEo?enablejsapi=1"]
    function handleClick(e){
        console.log(e.target.className)
        setUrl(urlArray[Number(e.target.id)]);
        setActive(e.target.id);
    }
    return (
        <div className="container-fluid" id="entire-body">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-sm-12 col-xs-12">
                        <div className='wrapper'>
                        <iframe title="video" className="player" type="text/html" width="640" height="390" videoId={url}
  src={url}
  allowfullscreen="allowfullscreen"

  frameborder="0"></iframe>
                        </div>
                    </div>
                    <div className="col-lg-4 video-list">
                        <div className="panel panel-primary" id="result_panel">
                            <div className="panel-heading"><h3 className="panel-title">Video List</h3></div>
                            <div className="panel-body">
                            <ul className="list-group">
                                {content.map((value,i)=>{
                                    return( <button className={!(Number(active)===i)?"align-items list-group-item":"align-items list-group-item active"} onClick={handleClick} id={i} key={i}>{i+1}.{value}</button>);
                                })}
                            </ul>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
};

export default GetStarted;