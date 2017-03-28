import Vue from 'vue'
import Vuex from 'vuex'
import {TOOGGLE_TAB, GETINDEX_LIST, TOOGGLE_TITLE} from './mutation-type.js'

Vue.use(Vuex)
const state = {
	tabIndex: 0,
  attentionShow: true,
	indexList: null
}

export default new Vuex.Store({
	state,
	mutations: {
  		[TOOGGLE_TAB] (state, index) {
    		state.tabIndex = index
  		},
  		[GETINDEX_LIST] (state, indexData) {
  			state.indexList = indexData
  		},
      [TOOGGLE_TITLE] (state, status) {
        state.attentionShow = status
      }
	}	
})
