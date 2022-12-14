import { createStore } from 'vuex'
import auth from './auth'
import currency from './currency'
import createPersistedState from 'vuex-persistedstate'

const store =  createStore({
  namespaced: true,
  state: {
     
  },
  getters: {
  
  },
  mutations: {
     
  },
  actions: {
   
  },
  modules: {
    auth,
    currency
  },
  plugins: [createPersistedState(
    {storage: window.sessionStorage}
    )]
})

export default store