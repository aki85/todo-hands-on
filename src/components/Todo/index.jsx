import React, { Component } from 'react'
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap'
import TodoItem from './TodoItem'

export default class Todo extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      name: ''
    }
  }

  onInput = (e) => {
    if (30 < e.target.value.length) return;
    this.setState({
      name: e.target.value
    })
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
    const { isUpdate } = this.props
    const { todos } = this.state
    
    return (
      <div className="main">
        <div className="latest">
          <h2>最新のTODO</h2>
          {0 < todos.length &&
            <TodoItem
              todo={todos[todos.length-1]}
              isUpdate={isUpdate} noDelete
              onUpdate={(e) => this.onListInput(todos.length-1, e)}
            />
          }
          {0 === todos.length &&
            <div>TODOがありません。</div>
          }
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
            return <TodoItem
              key={reversedIndex}
              isUpdate={isUpdate}
              todo={todos[reversedIndex]}
              onUpdate={(e) => this.onListInput(reversedIndex, e)}
              onDelete={() => this.removeTodo(reversedIndex)}
            />
          })}
        </ul>
      </div>
    )
  }
}