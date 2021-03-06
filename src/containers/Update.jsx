import React, { Component } from 'react'
import Layout from '../components/Layout'
import Todo from '../components/Todo'

export default class Update extends React.Component {

  render() {
    return <Layout isUpdate>
      <Todo isUpdate/>
    </Layout>
  }
}