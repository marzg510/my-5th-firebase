<template>
  <div class="container">
    <h1>Welcome<span v-if="authenticated">, {{ user.displayName }} !</span></h1>
    <ul id="menu">
      <li v-if="authenticated === false"><nuxt-link to="/login">Sign In</nuxt-link></li>
      <li><nuxt-link to="/hello">Hello</nuxt-link></li>
      <li><nuxt-link to="/message">Post Message</nuxt-link></li>
      <li><nuxt-link to="/tutorial">Tutorial</nuxt-link></li>
      <li><nuxt-link to="/logout">Sign Out</nuxt-link></li>
    </ul>
    
  </div>
</template>

<script>
import firebase from '@/plugins/firebase'
export default {
  name: 'IndexPage',
  // layout: 'protected',
  // middleware: 'authenticated', // ここでmiddlewareを指定しています。
  data() {
    return {
      authenticated: false,
      user: "",
    }
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.authenticated = true
        this.user = user
      }
    });
  },
  async RouteMiddleware() {
    console.log('in RouteMiddleware')
  },
  async mounted() {
    console.log('in mounted')
  }
  
}
</script>
