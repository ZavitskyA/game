import { createSelector } from 'reselect'
import { State } from '../index'
import { UIState } from './index'

export const uiLoadingSelector = createSelector<State, UIState, UIState['loading']>(
  ({ ui }) => ui,
  ({ loading }) => loading
)
