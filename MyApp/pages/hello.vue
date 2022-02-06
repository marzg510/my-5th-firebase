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

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7yUki_N0wMdGARmNGLo7FNUC_vJBCCbE",
  authDomain: "my-5th-firebase.firebaseapp.com",
  projectId: "my-5th-firebase",
  storageBucket: "my-5th-firebase.appspot.com",
  messagingSenderId: "422446364504",
  appId: "1:422446364504:web:1f6ae22c8417b3f5c8d72d",
  measurementId: "G-Z2KZVDTWCF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// import firebase from 'firebase/app'
// import firebase from 'firebase/compat/app'
// import firebase from 'firebase'

// import firebase from '@/plugins/firebase'
// import firebase from '~/plugins/firebase'
// import * as firebase from "firebase/app"
// import '@/plugins/firebase'
// import "firebase/functions"
// import { https } from "firebase/functions"
import { getFunctions, httpsCallable } from "firebase/functions";
export default {
  name: 'HelloPage',
  data () {
    return {
      name: ''
    }
  },
  methods: {
    helloworld () {
      // const functions = firebase.functions('asia-northeast1');
      // const functions = firebase.functions();
      const functions = getFunctions(app, 'asia-northeast1');
      // const functions = firebase.app().functions();
      // const functions = app.functions;
      // const func = functions.httpsCallable("helloWorld");
      const func = httpsCallable(functions, "helloWorld");
      func({name: this.name})
        .then((result) => {
          console.log(result)
          alert(result.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>
