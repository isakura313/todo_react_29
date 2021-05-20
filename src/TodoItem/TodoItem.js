import {Component} from 'react'
import './index.css'
import Button from '@material-ui/core/Button';


class TodoItem extends Component{
    createTasks = item =>{
        return(
            <div className = "TodoList" key={item.key}> 
                <div className="TodoText"> {item.text} </div>
                <Button variant="contained" color="secondary"
                onClick = {() => this.props.deleteItem(item.key)}> 
                    Done
                </Button>
            </div>
        )
    }
    render(){
        const listEn = this.props.entries // массив ключ - значений
        const ListItems = listEn.map(this.createTasks) // метод 
        return <div> {ListItems} </div>
    }
}
export default TodoItem