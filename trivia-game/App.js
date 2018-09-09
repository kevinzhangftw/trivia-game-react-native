import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './store'
import MainNavigator from './src/navigation/MainNavigator'

export default class App extends React.Component {
  render () {
    return (
      <Provider store={configureStore()}>
        <MainNavigator />
      </Provider>
    )
  }
}
