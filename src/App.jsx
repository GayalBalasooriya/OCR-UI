import React from 'react';
import ReactDOM from 'react-dom';
//import Logo from './logo.svg';
import './App.scss';
import {Login, Register} from './components/login/index';

class App extends React.Component {
  contructor(props) {
    super(props);
    
    this.state = {
      isLoggingActive: true, 
    }
  }

  changeState() {
    const { isLoggingActive } = this.state;
    if(isLoggingActive) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    }
    else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }

    this.setState((prevState) => ({isLoggingActive: !prevState.isLoggingActive}))
  }
 
  render() {
    const {isLoggingActive} = this.state;
    const current = isLoggingActive? "Register":"Login";
    const currentActive = isLoggingActive? "login":"register";
    return (
      <div className="App">
        <div className="login">
          <div className="container">'
            {isLoggingActive && <Login containerRef={(ref) => this.current = ref} />}
            {!isLoggingActive && <Register containerRef={(ref) => this.current = ref} />}
          </div>
          <RightSide current={current} containerRef={ref => this.rightSide = ref} onClick={this.changeState.bind(this)}/>
        </div>
      </div>
    )
  }
}

const RightSide = props => {
  return <div className="right-side" ref={props.containerRef} onClick={props.onClick}>
    <div className="inner-container">
<div className='text'>{props.current}</div>
    </div>
  </div>
}
export default App;
