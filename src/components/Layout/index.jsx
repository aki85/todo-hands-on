import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
export default class Layout extends React.Component {

  render() {
    const { isUpdate, isHandsOn } = this.props
    
    return (
      <>
        <Header isUpdate={isUpdate} isHandsOn={isHandsOn} />
        {this.props.children}
        <Footer />
      </>
    )
  }
}