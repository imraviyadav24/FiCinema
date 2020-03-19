import React from 'react';

const VideoDetail = ({ video }) => {
    if (!video) {
        return <div>Loading...</div>;
    }


    return (
       <div>
          <h4> {video.title}</h4>
          <p>Release Date:{video.release_date}</p>
       </div>
    );
};

export default VideoDetail;