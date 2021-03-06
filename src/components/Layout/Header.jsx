import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends React.Component {
  render() {
    const { isUpdate, isHandsOn } = this.props
    let headerText = 'Todo List'
    if (isHandsOn) headerText += ' Hands On'

    return (
      <header>
        <div>
          <span>{headerText}</span>
          {!isHandsOn &&
            <>
              <span><Link to="/hands_on">ハンズオンに移動</Link></span>
              <span>{isUpdate ? <Link to="/">完了</Link> : <Link to="/update">編集</Link>}</span>
            </>
          }
          {isHandsOn &&
            <>
              <span><Link to="/">完成形を確認</Link></span>
              <span>{isUpdate ? <Link to="/hands_on">完了</Link> : <Link to="/hands_on/update">編集</Link>}</span>
            </>
          }
        </div>
      </header>
    )
  }
}