import React from 'react';

const VideoDetails = ({ video }) => {
    if (!video) {
        return (<div>Loading...</div>)
    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <div key={video.id.videoId}>
            <div className="ui embed">
                <iframe title={video.snippet.title} src={videoSrc}/>
            </div>
            <div className="ui segment">
                <h4 className="ui header">
                    {video.snippet.title}
                </h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    )
}

export default VideoDetails;