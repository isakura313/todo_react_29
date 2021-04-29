import logo from './logo.svg';
import './App.css';
import {Component} from 'react'
import "./TodoList"
import "./TodoItem"



class App extends Component {
  constructor(){
    super()
    this.state = {
      items:[],
      current: {text: "Первое дело", inner_key:"firstItem"}
    }
  }
}

export default App;
