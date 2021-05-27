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
      currentItem: { text: "Первое дело", key: '' }
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
      axios({
        method: 'post',
        url: "http://isakura3131.zonopo.ru/deals",
        headers: {}, 
        data: {
          text: newItem.text
        }
      }).then((res) => {
        newItem.key = res.data.id;
      })

      const items = [...this.state.items, newItem]
      this.setState({
        items:items,
        currentItem: { text: '', key: newItem.key}
      })

      // после обновления  state обновляем и localStorage
      // const jsonItems = JSON.stringify(items)
      // localStorage.setItem("items", jsonItems)
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
    axios({
      method: 'delete',
      url: `http://isakura3131.zonopo.ru/deal/${key}`
    }).then((res)=>{
      if(res.status == 200){
        alert("Дело успешно удалено")
      } else{
        alert("Произошла ошибка во время удаления")
      }
    })

    this.setState({
      items: filteredItems,
    })
    // текущий отфильтрованный items законсервировать в json
    // обновить значение items в localStorage
    // const items = JSON.stringify(filteredItems)
    // localStorage.setItem('items', items)
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
