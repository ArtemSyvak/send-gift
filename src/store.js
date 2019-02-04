import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const state = {
    isLogged:false,
    user:null,
    token:'',
    email:'',
    password:''
};
const mutations = {
    // set or update any properties of state
    setState(state, payload){
        state[payload[0]] = payload[1]
    }
};
const actions={};

const  store = function(){

  let storage = new Vuex.Store({
      state,
      mutations,
      actions
  });
    return storage;
};

export default store;