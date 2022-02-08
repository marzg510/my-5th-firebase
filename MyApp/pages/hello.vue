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
export default {
  name: 'HelloPage',
  middleware: 'authenticated', // ここでmiddlewareを指定しています。
  data () {
    return {
      name: ''
    }
  },
  methods: {
    helloworld () {
      const functions = firebase.app().functions('asia-northeast1');
      // firebase.app().functions('asia-northeast1').useEmulator("localhost", 5001);
      const func = functions.httpsCallable("helloWorld");
      func({ name: this.name })
        .then((result) => {
          console.log(result)
          alert("reply:" + result.data.msg)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>
