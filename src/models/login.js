export default {

  namespace: 'app',

  state: {
    loginLoading: false
  },

  subscriptions: {
    setup({ dispatch, history }) {
    },
  },

  effects: {

  },

  reducers: {
    showLoginLoading(state) {
      return {
        loginLoading: true,
      };
    },
    hideLoginLoading(state) {
      return {
        loginLoading: false,
      };
    }
  },
};
