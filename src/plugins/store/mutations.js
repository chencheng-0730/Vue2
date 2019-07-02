import * as types from './types'

export default {
  [types.UPDATE_HOME]: (state, payload) => {
    state.home = payload
  },
  [types.UPDATE_DETAIL]: (state, payload) => {
    state.detail = payload
  },
  [types.UPDATE_USER]: (state, payload) => {
    state.user = payload
  }
}
