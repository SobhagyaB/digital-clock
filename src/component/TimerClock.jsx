import React,{Component} from 'react'
export default class TimerClock extends Component {
    constructor() {
      super();
      this.state = {
        time: '',
      };
    }
    componentDidMount() {
      this.IntervalId = setInterval(() => {
        this.setState({ time: new Date().toLocaleTimeString() });
      }, 1000);
    }
    
    render() {
      return (
        <>
        
        <div className="clock-container ">
          <h1 className="clock">{this.state.time}</h1>
        </div>
        </>
        );
    }
  }