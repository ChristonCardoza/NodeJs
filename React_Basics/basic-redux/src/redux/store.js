import { createStore , applyMiddleware } from 'redux'
import logger from 'redux-logger'
// import cakeReducer from './cakes/cakeReducer'
import rootReducer from './rootReducer'

//debugger
import { composeWithDevTools } from 'redux-devtools-extension';

// const store = createStore(cakeReducer)
// const store = createStore(rootReducer)
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger)))

export default store