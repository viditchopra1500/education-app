import React, { useState } from 'react';
import './getStarted.css';

const GetStarted=(props)=>{
    const titlename=props.location.titlename;
    const [active,setActive]=useState(0);
    const content1=[{tits:'fuck1',url:'https://www.youtube.com/embed/D4jj3HHrnSU?enablejsapi=1'},{tits:'fuck1',url:'https://www.youtube.com/embed/D4jj3HHrnSU?enablejsapi=1'},{tits:'fuck1',url:'https://www.youtube.com/embed/D4jj3HHrnSU?enablejsapi=1'},{tits:'fuck1',url:'https://www.youtube.com/embed/D4jj3HHrnSU?enablejsapi=1'}];
    const content2=[{tits:'fuck2',url:'https://www.youtube.com/embed/D4jj3HHrnSU?enablejsapi=1'},{tits:'fuck2',url:'https://www.youtube.com/embed/D4jj3HHrnSU?enablejsapi=1'},{tits:'fuck2',url:'https://www.youtube.com/embed/D4jj3HHrnSU?enablejsapi=1'},{tits:'fuck2',url:'https://www.youtube.com/embed/D4jj3HHrnSU?enablejsapi=1'}];
    const content3=[{tits:'fuck3',url:'https://www.youtube.com/embed/D4jj3HHrnSU?enablejsapi=1'},{tits:'fuck3',url:'https://www.youtube.com/embed/D4jj3HHrnSU?enablejsapi=1'},{tits:'fuck3',url:'https://www.youtube.com/embed/D4jj3HHrnSU?enablejsapi=1'},{tits:'fuck3',url:'https://www.youtube.com/embed/D4jj3HHrnSU?enablejsapi=1'}];
    const content4=[{tits:'fuck4',url:'https://www.youtube.com/embed/D4jj3HHrnSU?enablejsapi=1'},{tits:'fuck4',url:'https://www.youtube.com/embed/D4jj3HHrnSU?enablejsapi=1'},{tits:'fuck4',url:'https://www.youtube.com/embed/D4jj3HHrnSU?enablejsapi=1'},{tits:'fuck4',url:'https://www.youtube.com/embed/D4jj3HHrnSU?enablejsapi=1'}];
    const content5=[{tits:'fuck5',url:'https://www.youtube.com/embed/D4jj3HHrnSU?enablejsapi=1'},{tits:'fuck5',url:'https://www.youtube.com/embed/D4jj3HHrnSU?enablejsapi=1'},{tits:'fuck5',url:'https://www.youtube.com/embed/D4jj3HHrnSU?enablejsapi=1'},{tits:'fuck5',url:'https://www.youtube.com/embed/D4jj3HHrnSU?enablejsapi=1'}];
    var content=content1;
    if(titlename===1)
    content=content1;
    if(titlename===2)
    content=content2;
    if(titlename===3)
    content=content3;
    if(titlename===4)
    content=content4;
    if(titlename===5)
    content=content5;
    const [url,setUrl]=useState(content[0].url);

    function handleClick(e){
        console.log(e.target.className)
        setUrl(content[Number(e.target.id)].url);
        setActive(e.target.id);
    }
    return (
        <div className="container-fluid getstarted" id="entire-body">
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
                            <ul className="started list-group">
                                {content.map((value,i)=>{
                                    return( <button className={!(Number(active)===i)?"started align-items list-group-item":"started align-items list-group-item active"} onClick={handleClick} id={i} key={i}>{i+1}.{value.tits}</button>);
                                })}
                            </ul>
                            </div>
                            </div>
                        </div>
                
                </div>
        </div>
    )
};

export default GetStarted;