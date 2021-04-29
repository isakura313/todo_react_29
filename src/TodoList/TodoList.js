import {Component} from 'react'
import './index.css'

const css = {
    color: "red",
    fontSize: "20px",
    textAlign: "center"
  }
  const input = {
    fontSize: "20px",
    color: "red"
  }
  const button = {
    fontSize: "20px",
    color: "white",
    backgroundColor: "orange",
    borderRadius: "5px",
    marginLeft: "20px"
  }

class TodoList extends Component{
    render(){
    return (
        <div className="App" style={css}>
            <h1> Todo </h1>
            <form onSubmit= {this.props.addItem} >
                <input type="text" style={input} 
                ref={this.props.inputElement}
                value = {this.props.currentItem.item}
                onChange={this.props.handleInput}
                />
                <button style={button} type="submit">+</button>
            </form>
        </div>
      );
    }
}
export default TodoList