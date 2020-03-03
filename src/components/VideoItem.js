import './VideoItem.css';
import React from 'react';
import {IMAGE_BASE_URL, BACKDROP_SIZE,POSTER_SIZE} from '../config';


const VideoItem = ({ video , onVideoSelect}) => {
    return (
       <div onClick={() => onVideoSelect(video)} className="video-item item">
           <img className="ui image" src={IMAGE_BASE_URL+BACKDROP_SIZE+video.poster_path} />
           <div className="content">
              <div className="header">{video.title}</div>
           </div>
       </div>
    );
};

export default VideoItem;