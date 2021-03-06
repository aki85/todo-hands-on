import React, { Component } from 'react'
import Layout from '../../components/Layout'
import HandsOnTodo from '../../components/handsOn/HandsOnTodo'

export default class HandsOnUpdate extends React.Component {

  render() {
    return <Layout isUpdate isHandsOn>
      <HandsOnTodo isUpdate/>
    </Layout>
  }
}