import Vue from 'vue'
import Vuex from 'vuex'
const fb = require('./firebaseConfig.js')
Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        currentUser: null,
        userProfile: {},
        startUp: null,
        propostas: {},
        apresentacoes: {},
        desenvolvimentos: {},
        gradeProposta: 0,
        gradePitch: 0,
        gradeDesenv: 0,
    },
    actions: {
        clearData({ commit }) {
            commit('setSelectedStartUp', null)
            commit('setPropostas', null)
            commit('setApresentacoes', null)
            commit('setDesenvolvimentos', null)
        },
        setPropsAsync({ commit }, val) {
            commit('setPropostas', val)
        },
        setPitchAsync({ commit }, val) {
            commit('setApresentacoes', val)
        },
        setDesenvAsync({ commit }, val) {
            commit('setDesenvolvimentos', val)
        }
    },
    mutations: {
        setCurrentUser(state, val) {
            state.currentUser = val
        },
        setUserProfile(state, val) {
            state.userProfile = val
        },
        setSelectedStartUp(state, val) {
            state.startUp = val
        },
        setDesenvGrade(state, val) {
            state.gradeDesenv = val
        },
        setPitchGrade(state, val) {
            state.gradePitch = val
        },
        setPropostaGrade(state, val) {
            state.gradeProposta = val
        }
    }
});

fb.auth.onAuthStateChanged(user => {
    if (user) {
        store.commit('setCurrentUser', user.uid)
    }
})