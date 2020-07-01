import React from 'react';

class DrumPad extends React.Component {
    constructor(props){
        super(props)

        this.playSound = this.playSound.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);

    }
componentDidMount(){
    document.addEventListener('keydown', this.handleKeyPress);
}
componentWillUnmount(){
    document.removeEventListener('keydown', this.handleKeyPress)
}


handleKeyPress(e){
    if(e.keyCode === this.props.code){
        this.playSound();
    }
}

playSound(e){
const sound = document.getElementById(this.props.trigger);
sound.currentTime = 0;
sound.play();
this.props.updateDisplay(this.props.soundId);
}


    render(){
        return (
            <div
            id={this.props.soundId}
            className="drum-pad"
            onClick={this.playSound}
            >
                <audio
                className="clip"
                id={this.props.trigger}
                src={this.props.sound}
                ></audio>
                {this.props.trigger}
            </div>
        )
    }
}


export default DrumPad;