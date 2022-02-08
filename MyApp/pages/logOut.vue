<!-- eslint-disable -->
<template>
  <div class="container">
    <h1>Logout</h1>
    <div class="inputs">
      <input @click="logout" type="button" value="ログアウト">
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import firebase from '~/plugins/firebase'
export default {
  name: 'LogOutPage',
  methods: {
    logout () {
      firebase.auth().signOut().then(()=>{
        console.log("ログアウトしました");
        redirect("/")
      })
      .catch( (error)=>{
        console.log(`ログアウト時にエラーが発生しました (${error})`);
      });
    }
  }
}
</script>
