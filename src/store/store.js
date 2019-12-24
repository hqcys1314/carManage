import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state')): {
    count: 5,
    userInfo: 10,
  },
  mutations: {
    increment (state) {
      state.count++;
    },
    changeUserInfo(state,val){
      console.log('cui='+val);
      state.userInfo=val;
    },
  }
})

export default store
