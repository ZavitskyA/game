import { reducer } from '../helpers/reducerSwitchcase'
import { setFieldByPath } from '../helpers/setFieldByPath'
import { SET_FIELD_BY_PATH } from '../actions/setFieldByPath'
import { boardDefaultState, BoardState } from './board'
import { uiDefaultState, UIState } from './ui'

export interface State {
  ui: UIState,
  board: BoardState,
}

export const defaultState: State = {
  ui: uiDefaultState,
  board: boardDefaultState
}

export const stateReducer = reducer(defaultState, {
  [SET_FIELD_BY_PATH]: setFieldByPath
})
