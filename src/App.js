import './App.css';
import { Component } from 'react'
import "./TodoList"
import "./TodoItem"
import TodoItem from './TodoItem';
import TodoList from './TodoList';



class App extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      currentItem: { text: "Первое дело", inner_key: 'first' }
    }
  }
  handleInput = event => {
    const itemText = event.target.value
    const currentItem = { text: itemText, key: Date.now() }
    this.setState({
      currentItem,
    })
  }
  addItem = e => {
    e.preventDefault()
    const newItem = this.state.currentItem;
    if (newItem.text !== '') {
      const items = [...this.state.items, newItem]
      this.setState({
        items,
        currentItem: { text: '', key: '' }
      })
    }
  }
  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    console.log(filteredItems)
    // this.setState({
    //   items: filteredItems
    // })
  }
  render() {
    return (
      <div className="App">
        <TodoList
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
        />
        <TodoItem entries={this.state.items} deleteItem={this.deleteItem} />
      </div>
    )
  }
}

export default App;
