<template>
  <div id="firebaseui-auth-container" />
</template>

<script>
/* eslint-disable */
// import * as firebaseui from 'firebaseui/dist/esm__ja'
// import firebaseui from 'firebaseui'
var firebaseui = require('firebaseui-ja')
import firebase from '@/plugins/firebase'
import 'firebaseui-ja/dist/firebaseui.css'

export default {
  async mounted() {
    await firebase.auth().setPersistence( firebase.auth.Auth.Persistence.LOCAL )
    const config = {
      signInOptions: [
        {
          provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID
        },
        {
          provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
          requireDisplayName: false,
          disableSignUp: {
            status: true,
            adminEmail: '',
            helpLink: './loginDenied',
          },
        },
      ],
      callbacks: {
        signInSuccessWithAuthResult(authResult, redirectUrl) {
          return true
        },
      },
      signInSuccessUrl: '/',
      signInFlow: 'redirect',
    }
    const ui = new firebaseui.auth.AuthUI(firebase.auth())
    ui.start('#firebaseui-auth-container', config)
  },
}
</script>
