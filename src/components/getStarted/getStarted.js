import React from 'react';
import ReactPlayer from 'react-player'
import './getStarted.css'
const getStarted=(props)=>{
    return (
        <section className="started">
            <div className="material container-fluid">
                    <div className="video-player">
                     <ReactPlayer url='https://www.youtube.com/watch?v=JGwWNGJdv8'
                    playing 
                    controls="true"
                    width="50%"
                    height="50%"/>
                    </div> 
            <div class="panel panel-primary" id="result_panel">
                <div class="panel-heading"><div >Topics</div>
                    <div class="panel-body">
                        <ul class="list-group">
                            <li class="list-group-item"><strong>Signature
                                Accommodations</strong>(1480m)
                            </li>
                            <li class="list-group-item"><strong>Signature
                                Accommodations</strong>(1480m)
                            </li>
                            <li class="list-group-item"><strong>Signature
                                Accommodations</strong>(1480m)
                            </li>
                            <li class="list-group-item"><strong>Signature
                                Accommodations</strong>(1480m)
                            </li>
                            <li class="list-group-item"><strong>Signature
                                Accommodations</strong>(1480m)
                            </li>
                            <li class="list-group-item"><strong>Signature
                                Accommodations</strong>(1480m)
                            </li>
                            <li class="list-group-item"><strong>Signature
                                Accommodations</strong>(1480m)
                            </li>
                            <li class="list-group-item"><strong>Signature
                                Accommodations</strong>(1480m)
                            </li>
                            <li class="list-group-item"><strong>Signature
                                Accommodations</strong>(1480m)
                            </li>
                            <li class="list-group-item"><strong>Signature
                                Accommodations</strong>(1480m)
                            </li>
                            <li class="list-group-item"><strong>Signature
                                Accommodations</strong>(1480m)
                            </li>
                            <li class="list-group-item"><strong>Signature
                                Accommodations</strong>(1480m)
                            </li>
                            <li class="list-group-item"><strong>Signature
                                Accommodations</strong>(1480m)
                            </li>
                            <li class="list-group-item"><strong>Signature
                                Accommodations</strong>(1480m)
                            </li>
                        </ul>
                     </div>
                    </div> 
                </div>
            </div>
        </section>
    )
};

export default getStarted;