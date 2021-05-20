import './App.css';
import { Component } from 'react'
import TodoItem from './TodoItem';
import TodoList from './TodoList';



class App extends Component {
  constructor() {
    super()
    this.state = {
      items: [ { text: "Первое дело", key: 'first' }],
      currentItem: { text: "Первое дело", key: 'first' }
      //  дергаем LocalStorage при загрузке ComponentDidMount и писать в state 
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
       // после обновления  state обновляем и localStorage
       const jsonItems = JSON.stringify(items)
       localStorage.setItem("items", jsonItems)
    }
  }
  deleteItem = key => {
    console.log(key)
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
  
    console.log(filteredItems)
    this.setState({
      items: filteredItems,
    })
  }


  // удаление из LocalStorage  по ключу
  // добавить Ant Design
  // Добавить LocalStorage
  // Добавить  API - Либо самописное либо Firebase 
  // добавить компоненты, которые могут быть полезны - календарь с часами
 // TypeScript
 // Деплой c Docker nginx - отдавать статику  

 componentDidMount(){
   const items = JSON.parse(localStorage.getItem('items'))
   console.log(items)
   this.setState({
     items,
   })
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
