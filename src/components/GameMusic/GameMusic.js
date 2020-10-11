import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeUp, faVolumeMute } from '@fortawesome/free-solid-svg-icons'
import soundFile from '../../music/farewell-princess.mp3'
import Sound from 'react-sound'
export default class GameMusic extends Component {
    constructor(props) {
        super(props);
        this.state = {
          status: Sound.status.PLAYING,
          pause: false,
          volume: faVolumeUp
        }
      }

    changeStatus = () => {
        if(!this.state.pause){
            this.setState({
                status: Sound.status.PAUSED,
                pause: true,
                volume: faVolumeMute,
            })
        }else{
            this.setState({
                status: Sound.status.PLAYING,
                pause: false,
                volume: faVolumeUp,
            })
        }
        
    }

    render() {
        return (
            <div className="volumeSection">
                <FontAwesomeIcon icon={this.state.volume} onClick={this.changeStatus} className="volumeIcon"/>
                <Sound 
                url={soundFile}
                playStatus={this.state.status}
                loop={true}
                volume={20}
            />
            </div>
        )
    }
}