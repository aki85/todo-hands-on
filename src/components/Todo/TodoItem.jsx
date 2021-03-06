import React, { Component } from 'react'
import { FormControl } from 'react-bootstrap'
export default class TodoItem extends React.Component {
  
  render() {
    const { isUpdate, todo, onUpdate, onDelete, noDelete } = this.props
    
    return (
      <li>
        {!isUpdate &&
          todo
        }
        {isUpdate &&
          <FormControl
            className="list-form"
            value={todo}
            onInput={(e) => onUpdate(e)}
          />
        }
        {isUpdate && !noDelete && <a tabIndex="-1" onClick={() => onDelete()}><i className="fa fa-times"></i></a>}
      </li>
    )        
  }
}