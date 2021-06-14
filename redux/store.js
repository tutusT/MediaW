import { createWrapper } from 'next-redux-wrapper'
import { applyMiddleware, createStore } from 'redux'
import { reducer } from './reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const makeStore = () =>
  createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export const wrapper = createWrapper(makeStore, { debug: true })
