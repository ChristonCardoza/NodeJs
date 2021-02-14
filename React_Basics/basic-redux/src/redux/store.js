import { createStore , applyMiddleware } from 'redux'
import logger from 'redux-logger'
// Allow action creator to allow function instead of action 
import thunk from 'redux-thunk'
// import cakeReducer from './cakes/cakeReducer'
import rootReducer from './rootReducer'

//debugger
import { composeWithDevTools } from 'redux-devtools-extension';

// const store = createStore(cakeReducer)
// const store = createStore(rootReducer)
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger,thunk)))

export default store