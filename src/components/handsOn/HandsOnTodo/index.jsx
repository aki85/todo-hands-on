import React, { Component } from 'react'
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap'
import HandsOnTodoItem from './HandsOnTodoItem'

export default class HandsOnTodo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      name: ''
    }
  }

  onInput = (e) => {
    if (30 < e.target.value.length) return;
    // step1. setState(ref. Todo/index.jsx)
  }

  onListInput = (index, e) => {
    if (30 < e.target.value.length) return;
    const { todos } = this.state
    todos[index] = e.target.value
    this.setState({ todos })
  }

  addTodo = (e) => {
    e.preventDefault()
    const { todos, name } = this.state
    if (!name) return
    this.setState({
      todos: [...todos, name],
      name: ''
    })
  }

  removeTodo = (index) => {
    const { todos } = this.state
    this.setState({
      todos: [...todos.slice(0, index), ...todos.slice(index + 1)]
    })
  }

  render() {
    // step2. isUpdateをpropsから持ってくる(ref. Todo/index.jsx)
    
    const { todos } = this.state
    
    return (
      <div className="main">
        <div className="latest">
          <h2>最新のTODO</h2>
          {/* step5. 最新のTODOをHandsOnTodoItemを用いて表示(ref. Todo/index.jsx: 54~63) */}
        </div>
        <Form onSubmit={this.addTodo.bind(this)}>
          <InputGroup className="mb-3">
            <FormControl
              value={this.state.name}
              onInput={this.onInput}
            />
            <InputGroup.Append>
              <Button type="submit" variant="outline-secondary">登録</Button>
            </InputGroup.Append>
          </InputGroup>
        </Form>
        <ul>
          {todos.map((todo, index) => {
            const reversedIndex = todos.length - index - 1
            // step3. isUpdateによって動作を分岐(ref. Todo/TodoItem.jsx)
            // step4. HandsOnTodoItemを実装して表示(ref. Todo/TodoItem.jsx, Todo/index.jsx: 79~85)
            return (
              <li key={reversedIndex}>
                <FormControl
                  className="list-form"
                  value={todo}
                  onInput={(e) => this.onListInput(reversedIndex, e)}
                />
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}