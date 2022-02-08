<!-- eslint-disable -->
<template>
  <div class="container">
    <h1>Post Message</h1>
    <div class="inputs">
      <label for="name">お名前</label>
      <input v-model="name" name="name" type="text">
      <label for="content">メッセージ</label>
      <input v-model="content" name="content" type="text">
      <input @click="post" type="button" value="送信">
    </div>
    <div class="list">
      <input @click="get" type="button" value="get">
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>content</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="message in messages" :key="message.id">
            <td>{{ message.id }}</td>
            <td>{{ message.data().name }}</td>
            <td>{{ message.data().content }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
// import firebase from '@/plugins/firebase'
import firebase from 'firebase/app'
// import "firebase/functions"
import 'firebase/firestore'
export default {
  name: 'MessagePage',
  middleware: 'authenticated', // ここでmiddlewareを指定しています。
  data () {
    return {
      name: '',
      content: ''
    }
  },
  async asyncData({ params }) {
    return {
      messages: await getAllDocs("messages")
    };
  },
  methods: {
    post () {
      console.log("post")
      console.log("post name="+this.name+", content="+this.content)
      const db = firebase.firestore()
      const messages = db.collection("messages")
      messages.add({
        name: this.name,
        content: this.content
      })
      .catch((error) => {
        throw new Error(error)
      })
    },
    get() {
      const db = firebase.firestore()
      var doc = db.collection("messages").doc('9cOixOnqG2I0p8pdNDm6')
      doc.get()
      .then(function(doc) {
        document.getElementById("message.id").innerHTML = (doc.id)
        document.getElementById("message.name").innerHTML = (doc.data().name)
        document.getElementById("message.content").innerHTML = (doc.data().content)
      })
    },
    //   const functions = firebase.app().functions('asia-northeast1');
    //   const func = functions.httpsCallable("postMessage");
    //   func({ name: this.name })
    //     .then((result) => {
    //       console.log(result)
    //       alert("reply:" + result.data.msg)
    //     })
    //     .catch((error) => {
    //       console.log(error)
    //     })
  },
}
async function getAllDocs(collection) {
  var obj = [];
  var colRef = firebase.firestore().collection(collection)
  const allSnapShot = await colRef.get();
  return allSnapShot.docs.map(doc => {
    return doc
  })
  // allSnapShot.forEach(doc => {
    // obj.push({ id: doc.id, data: doc.data() })
  // })
  // return obj
}
</script>
