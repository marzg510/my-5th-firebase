import firebase from '~/plugins/firebase'

export default function ({ route, store, redirect }) {
  console.log('in authenticated')
  return new Promise((resolve) => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        var uid = user.uid;
        console.log("signed in uid="+uid)
        console.log("signed in user.displayName="+user.displayName)
        console.log("signed in user.email="+user.email)
        console.log("signed in user="+user)
        // ...
      } else if (route.name !== 'login') {
        // User is signed out
        // ...
        console.log('in user no exists')
        redirect('/login')
      }
      return resolve(user)
    });
  })
  // return new Promise((resolve) => {
  //   firebase.auth().onAuthStateChanged(async (user) => {
  //     await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  //     if (user) {
  //       console.log('user exists')
  //       store.dispatch('auth/getUser', user)
  //       const idTokenResult = await user.getIdTokenResult(true)
  //       if (!idTokenResult.claims.admin) {
  //         // 管理者じゃない
  //         console.log('no admin')
  //         redirect('/authdenied')
  //       }
  //       console.log('admin user')
  //     } else if (route.name !== 'login') {
  //       // ログインページ以外でユーザーがない
  //       console.log('in user no exists')
  //       redirect('/login')
  //     }
  //     return resolve(user)
  //   })
  // })
}
