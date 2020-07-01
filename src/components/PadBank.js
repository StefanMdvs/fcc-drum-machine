import React from 'react';
import DrumPad from './DrumPad';

class PadBank extends React.Component {
    

    render(){
        let padBank = this.props.padSource
        .map((drumObj, i, padArr) => {
            return (
                <DrumPad 
                key={i}
                soundId={padArr[i].id}
                sound={padArr[i].url}
                trigger={padArr[i].keyTrigger}
                code={padArr[i].keyCode}
                updateDisplay={this.props.updateDisplay}
                />
            )
        });
        console.log(padBank)
        return (
        <div id="pads">{padBank}</div>
        )
    }
}

export default PadBank;