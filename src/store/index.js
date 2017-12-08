export default {
  state: {
    routerName: ''
  },
  mutations: {
    changeRouter (state, name) {
      state.routerName = name
    }
  }
}
