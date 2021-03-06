import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends React.Component {
  render() {
    const { isUpdate, isHandsOn, toggleIsUpdate } = this.props
    let headerText = 'Todo List'
    if (isHandsOn) headerText += ' Hands On'

    return (
      <header>
        <div>
          <span>{headerText}</span>
          {!isHandsOn &&
            <span><Link to="/hands_on">ハンズオンに移動</Link></span>
          }
          {isHandsOn &&
            <span><Link to="/">完成形を確認</Link></span>
          }
          <a onClick={() => toggleIsUpdate()}>{isUpdate ? '完了' : '編集'}</a>
        </div>
      </header>
    )
  }
}