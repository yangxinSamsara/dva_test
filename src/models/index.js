import * as testApi from '../services/testApi'
export default {

  namespace: 'index',

  state: {
    count: 0,
    topics: []
  },

  subscriptions: {
    test({ dispatch, history }) {  // eslint-disable-line
      history.listen(({ pathname }) => {
        console.log(pathname);
      })
    },
  },

  effects: {
    *countAddSync({ payload }, { put, call }) {
      console.log(payload);
      yield put({
        type: 'countAdd',
        payload: {
          num: payload.num
        }
      })
    },
    *getCnodeData({ payload }, { put, call }) {
      const { data } = yield call(testApi.testConde)
      if (data.success) {
        yield put({
          type: 'setTopics',
          payload: {
            topics: data.data
          }
        })
      }
    }
  },

  reducers: {
    countAdd(state, { payload }) {
      const countTemp = state.count + payload.num
      return {
        ...state,
        count: countTemp
      }
    },
    setTopics(state, { payload }) {
      return {
        ...state,
        topics: payload.topics
      }
    }
  },

};
