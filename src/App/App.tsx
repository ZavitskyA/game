import React, { FC } from 'react'
import { Provider } from 'react-redux'
import { store } from './createStore'
import { Board } from '../components/Board'

export const App: FC = () => (
  <Provider store={store}>
    <Board/>
  </Provider>
)
