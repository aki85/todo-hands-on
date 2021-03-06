import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
export default class Layout extends React.Component {

  render() {
    const { isUpdate, isHandsOn, toggleIsUpdate } = this.props
    
    return (
      <>
        <Header isUpdate={isUpdate} isHandsOn={isHandsOn} toggleIsUpdate={toggleIsUpdate} />
        {this.props.children}
        <Footer />
      </>
    )
  }
}