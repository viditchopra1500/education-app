import React from 'react';
import ReactPlayer from 'react-player'

const getStarted=(props)=>{
    return (
        <div className="video">
            <ReactPlayer url='https://www.youtube.com/watch?v=JGwWNGJdvx8'
             playing 
             controls="true"
             width="1200px"
             height="670px"/>  
        </div>
    )
};

export default getStarted;