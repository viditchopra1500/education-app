import React, { useState } from 'react';
import './getStarted.css';

const GetStarted=(props)=>{
    const [url,setUrl]=useState("https://www.youtube.com/embed/bWPMSSsVdPk?enablejsapi=1");
    const content=["System Calls","Virtual Memory","Registers","Addressing Modes","Types Of instructions","ISA","Floating Point Arithmetic","ALU","Cache","Locality","Cache Replacement Policy","Page Table","TLB","Pipeline","Hazards","IPC","Process Scheduling Algorithm","Preemption","Priority inversions","Interrupts","Profiling","File Systems","Links","Belady's Anomaly","Setuid bit"];
    const urlArray=["https://www.youtube.com/embed/D4jj3HHrnSU?enablejsapi=1","https://www.youtube.com/embed/2HVKizgcfjo?enablejsapi=1","https://www.youtube.com/embed/MKSQYsLLFEo?enablejsapi=1"]
    function handleClick(e){
        console.log(e.target.className)
        setUrl(urlArray[Number(e.target.id)]);
    }
    return (
        <div className="container-fluid" id="entire-body">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className='wrapper'>
                        <iframe className="player" type="text/html" width="640" height="390" videoId={url}
  src={url}
  allowfullscreen="allowfullscreen"

  frameborder="0"></iframe>
                        </div>
                        <div className="about">
                            <h1>
                                About the content
                            </h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="panel panel-primary" id="result_panel">
                            <div className="panel-heading"><h3 className="panel-title">Video List</h3></div>
                            <div className="panel-body">
                            <ul className="list-group">
                                {content.map((value,i)=>{
                                    return( <button className="align-items list-group-item" onClick={handleClick} id={i} key={i}>{i+1}.{value}</button>);
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