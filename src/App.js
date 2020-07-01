import React from 'react';

import { keys } from './components/keys';
import PadBank from './components/PadBank';
import './App.css';

//const keyboard = [...keys].filter(item => item.keyTrigger);
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      source: keys,
      display: 'Press or click on a key'
    }
    this.displaySoundName = this.displaySoundName.bind(this);
  }

  displaySoundName(name){
this.setState({
  display: name
})
  }
  
  render(){
    return (
      <container id="drum-machine"
      className="container">
        <h1 className="text-center">
          My drum machine
        </h1>
        <PadBank 
        updateDisplay={this.displaySoundName}
        padSource={this.state.source}
        />
        <p id="display"
        
        >{this.state.display}</p>
      </container>
    )
  } 
    
  
  
  
}

export default App;

