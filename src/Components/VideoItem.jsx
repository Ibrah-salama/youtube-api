import React from 'react';
import './videoItem.css'

const VideoItem = ({ video , onVideoSelect}) => {
    return (
        < div onClick={()=>onVideoSelect(video)} className="video-item item" >
            < img className="ui  image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
            <div className="content">
                <div className="header">{video.snippet.title}</div>
                {/* <div className="description">Last seen watching <a><b>Arrested Development</b></a> just now.</div> */}
            </div>
        </div >
    )
}

export default VideoItem