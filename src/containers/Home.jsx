import React, { Component } from 'react'
import Layout from '../components/Layout'
import Todo from '../components/Todo'

export default class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isUpdate: false
    }
  }

  render() {
    const { isUpdate } = this.state
    return <Layout isUpdate={isUpdate} toggleIsUpdate={() => this.setState({isUpdate: !isUpdate})}>
      <Todo isUpdate={isUpdate} />
    </Layout>
  }
}