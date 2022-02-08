import firebase from '~/plugins/firebase'

export const state = () => ({
  status: '',
  username: '',
  idToken: {}
})

export const getters = {
  isLoggedIn: (state) => {
    console.log('getter:isLoggedIn' + (state.status === 'loggedIn'))
    return (state.status === 'loggedIn')
  }
}

export const actions = {
  getUser ({ commit }, user) {
    commit('setUser', user)
  },
  async logout ({ commit }) {
    await firebase.auth().signOut()
    console.log('logout')
    return commit('logout')
  }
}
export const mutations = {
  async setUser (state, user) {
    state.status = 'loggedIn'
    state.username = user.displayName
    state.idToken = await user.getIdToken(true)
  },
  logout (state) {
    state.status = 'loggedOut'
    state.username = ''
  }
}
