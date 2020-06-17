import React from 'react';
import './getStarted.css';

const GetStarted=(props)=>{
    return (
        <div className="container-fluid getstarted" id="entire-body" >
                <div className="row">
                    <div className="col-lg-8 col-sm-12 col-xs-12">
                        <div className='wrapper container-fluid'>
                        <iframe title="video" className="player" type="text/html" width="640" height="390" videoid={props.url}
  src={props.url}
  allowFullScreen="allowfullscreen"

  frameBorder="0"></iframe>
                        </div>
                    </div>
                    <div className="col-lg-4 video-list">
                        <div className="panel panel-primary" id="result_panel">
                            <div className="panel-heading"><h3 className="panel-title">Video List</h3></div>
                            <div className="panel-body">
                            <ul className="started list-group">
                            {props.topics[props.titlename-1].map((value,i)=>{
                                    return( <button className={!(Number(props.active)===i)?"started align-items list-group-item":"started align-items list-group-item active"} onClick={props.handleClickVidList} id={i} key={i}>{i+1}.{value.title}</button>);
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