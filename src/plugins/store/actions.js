import axios from 'axios'
import {
  UPDATE_HOME,
  UPDATE_DETAIL,
  UPDATE_USER
} from './types'

export default {
  [ UPDATE_HOME ]: async ({ state, commit }, payload) => {
    let res = await axios.get(
      'https://m.jiuxian.com/m_v1/statics/getzx.htm?topicId=1165&pageNum=1'
    )
    console.log(res.data.promoList)
    commit(UPDATE_HOME, res.data.promoList)
  },
  // [ UPDATE_DETAIL ]: async ({ state, commit }, payload) => {
  //    let res = await axios.get(

  //    )
  }
}
