import React from 'react';

import youtube from './../apis/youtube'
import './app.css'

import SearchBar from './SearchBar'
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null,
        darkMode: false
    }
    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })
        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] })
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video })
    }

    componentDidMount() {
        this.onTermSubmit('Alone alan walker')
    }

    render() {
        return (
            <React.Fragment>
                    <div className="ui container"  >
                        <SearchBar onFormSubmit={this.onTermSubmit} />
                        I have {this.state.videos.length} videos
                        <div className="ui grid">
                            <div className=" ui row">
                                <div className="eleven wide column">
                                    <VideoDetails video={this.state.selectedVideo} />
                                </div>
                                <div className="five wide column">
                                    <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                                </div>
                            </div>
                        </div>
                    </div>
            </React.Fragment>
        )
    }
}

export default App;