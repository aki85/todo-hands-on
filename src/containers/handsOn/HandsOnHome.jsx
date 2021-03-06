import React, { Component } from 'react'
import Layout from '../../components/Layout'
import HandsOnTodo from '../../components/handsOn/HandsOnTodo'

export default class HandsOnHome extends React.Component {

  render() {
    return <Layout isHandsOn>
      <HandsOnTodo />
    </Layout>
  }
}