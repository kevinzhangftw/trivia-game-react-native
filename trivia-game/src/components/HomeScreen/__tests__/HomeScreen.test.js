import React from 'react'
import renderer from 'react-test-renderer'
import HomeScreen from '../HomeScreen'

require('react-native-mock/mock')
it('renders without crashing', () => {
  const rendered = renderer.create(<HomeScreen />).toJSON()
  expect(rendered).toBeTruthy()
})
