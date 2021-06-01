import React, {Component} from 'react'
import Button from '@material-ui/core/Button'

class Watch extends Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      return (
        <div>
          <Button color="primary">Сейчас {this.state.date.toLocaleDateString()}.</Button>
          <Button color="danger">Сейчас в Москве
           {this.state.date.getHours() +":"
           +this.state.date.getMinutes() }
           </Button>
          <Button color="danger">Сейчас в Нью-Йорке 
           { this.state.date.getHours() -7 +":"
           +this.state.date.getMinutes() }
           </Button>

        </div>
      );
    }
  }


  export default Watch