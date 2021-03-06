import React, { Component } from 'react'
import Layout from '../components/Layout'
import Todo from '../components/Todo'

export default class Home extends React.Component {

  render() {
    return <Layout>
      <Todo />
    </Layout>
  }
}