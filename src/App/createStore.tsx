import { createHashHistory } from 'history'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { stateReducer } from '../reducers'

export const history = createHashHistory()

const middles = [
  thunk
]

let middleware = applyMiddleware(...middles)

export let store = createStore(
  // @ts-ignore
  stateReducer,
  middleware,
)

