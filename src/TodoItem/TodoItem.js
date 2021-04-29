import {Component} from 'react'
import './index.css'


class TodoItem extends Component{
    createTasks = item =>{
        return(
            <div className = "TodoList" key={item.inner_key}> 
                <div className="TodoText"> {item.text} </div>
                <button onClick = {this.props.deleteItem(item.inner_key)}> 
                    Done
                </button>
            </div>
        )
    }
    render(){
        const listEn = this.props.entries 
        const ListItems = listEn.map(this.createTasks)
        return <div> {ListItems} </div>
    }
}
export default TodoItem