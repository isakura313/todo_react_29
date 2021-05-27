import './App.css';
import { Component } from 'react'
import TodoItem from './TodoItem';
import TodoList from './TodoList';
import database from './firebase'
import Watch from './Watch/Watch'
import axios from 'axios';


class App extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      currentItem: { text: "Первое дело", key: 'first' }
      //  дергаем LocalStorage при загрузке ComponentDidMount и писать в state 
    }


  }
  handleInput = event => {
    const itemText = event.target.value
    console.log(event.target.value)
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
        items:items,
        currentItem: { text: '', key: Date.now() }
      })
      // после обновления  state обновляем и localStorage
      const jsonItems = JSON.stringify(items)
      localStorage.setItem("items", jsonItems)
      // const databaseRef = database().ref()
      // const todosRef = databaseRef.child('todos')

      // todosRef.push(this.currentItem)
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
    // текущий отфильтрованный items законсервировать в json
    // обновить значение items в localStorage
    const items = JSON.stringify(filteredItems)
    localStorage.setItem('items', items)
  }


  // удаление из LocalStorage  по ключу
  // добавить React UI
  // Добавить LocalStorage
  // Добавить  API - Либо самописное либо Firebase 
  // добавить компоненты, которые могут быть полезны - календарь с часами
  // TypeScript
  // Деплой c Docker nginx - отдавать статику  
  // баг - поправить очищение input и поправить расположение кнопки удалить 
  // поправить иконку удаления

  componentDidMount() {
    // const items = JSON.parse(localStorage.getItem('items'))
    axios.get("http://isakura3131.zonopo.ru/deals")
    .then(res => {
      const items = res.data.map((el)=> {
        return {text: el.text, key: el.id}
       })
      this.setState({ items });
    })
    // if (items) {
    //   this.setState({
    //     items,
    //   })
    // } else{
    //   this.setState({
    //     items:[]
    //   })
    // }
  }

  render() {
    return (
      <div className="App">
        <Watch />
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
