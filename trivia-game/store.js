import thunk from 'redux-thunk'
import rootReducer from './src/reducers'

import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

export default configureStore = () => {
  const composeEnhancers = composeWithDevTools({ realtime: true, port: 19001 })
  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  )
}
