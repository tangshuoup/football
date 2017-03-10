import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
	tabIndex: 0	
}

export default new Vuex.Store({
	state,
	mutations: {
  		increment (state, index) {
    		state.tabIndex = index
  		} 		
	}	
})
