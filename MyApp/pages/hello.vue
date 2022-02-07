<!-- eslint-disable -->
<template>
  <div class="container">
    <h1>Hello</h1>
    <div class="inputs">
      <label for="name">お名前は？</label>
      <input v-model="name" name="name" class="i-name" type="text">
      <div class="send-box">
        <input @click="helloworld" type="button" value="送信">
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import firebase from '@/plugins/firebase'
import "firebase/functions"
const firebaseConfig = {
  apiKey: "AIzaSyA7yUki_N0wMdGARmNGLo7FNUC_vJBCCbE",
  authDomain: "my-5th-firebase.firebaseapp.com",
  projectId: "my-5th-firebase",
  storageBucket: "my-5th-firebase.appspot.com",
  messagingSenderId: "422446364504",
  appId: "1:422446364504:web:1f6ae22c8417b3f5c8d72d",
  measurementId: "G-Z2KZVDTWCF"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}
export default {
  name: 'HelloPage',
  data () {
    return {
      name: ''
    }
  },
  methods: {
    helloworld () {
      const dummy = { test: "hello" }
      const functions = firebase.app().functions('asia-northeast1');
      const func = functions.httpsCallable("helloWorld");
      func({name: this.name})
        .then((result) => {
          console.log(dummy.test)
          console.log(result)
          alert(result.data.msg)
          // alert("yeah")
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>
