import React, { Component } from 'react'
import Layout from '../../components/Layout'
import HandsOnTodo from '../../components/handsOn/HandsOnTodo'

export default class HandsOnHome extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isUpdate: false
    }
  }

  render() {
    const { isUpdate } = this.state
    return <Layout isHandsOn isUpdate={isUpdate} toggleIsUpdate={() => this.setState({isUpdate: !isUpdate})}>
      <HandsOnTodo isUpdate={isUpdate} />
    </Layout>
  }
}