import {Component} from 'react'
import './index.css'
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';

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
    marginLeft: "10px",
  }

class TodoList extends Component{
    render(){
    return (
        <div className="App" style={css}>
            <h1> Todo </h1>
            <form onSubmit= {this.props.addItem} >
                <TextField  
                type="text" style={input} 
                ref={this.props.inputElement}
                value = {this.props.currentItem.item}
                onChange={this.props.handleInput}
                />
                <IconButton 
                  type="submit"
                  aria-label="add"
                  style={button}
                  >                  
                    <AddIcon />
                  </IconButton>
            </form>
        </div>
      );
    }
}
export default TodoList