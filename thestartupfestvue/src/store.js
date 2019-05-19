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
        setPropostas(state, val) {
            state.propostas = val
        },
        setApresentacoes(state, val) {
            state.apresentacoes = val
        },
        setDesenvolvimentos(state, val) {
            state.desenvolvimentos = val
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

fb.pitchCollection.orderBy("Grade").onSnapshot(function (querySnapshot) {
    let pitchArray = [];
    querySnapshot.forEach(function (doc) {
        pitchArray.push(doc.data());
    });
    store.commit('setApresentacoes', pitchArray)
});
fb.propostasCollection.orderBy("Grade").onSnapshot(function (querySnapshot) {
    let propsArray = [];
    querySnapshot.forEach(function (doc) {
        propsArray.push(doc.data());
    });
    store.commit('setPropostas', propsArray)
});

fb.desenvolvimentoCollection.orderBy("Grade").onSnapshot(function (querySnapshot) {
    let desenvArray = [];
    querySnapshot.forEach(function (doc) {
        desenvArray.push(doc.data());
    });
    store.commit('setDesenvolvimentos', desenvArray)
})
fb.auth.onAuthStateChanged(user => {
    if (user) {
        store.commit('setCurrentUser', user.uid)
    }
})