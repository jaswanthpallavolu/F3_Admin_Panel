import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyBLVz4yqRySG0l17iW7MWDqJ8JLt7u48N4",
    authDomain: "for-f3-app.firebaseapp.com",
    projectId: "for-f3-app",
    storageBucket: "for-f3-app.appspot.com",
    messagingSenderId: "128956282974",
    appId: "1:128956282974:web:fba74f0a81f1b4b4501ccf"
})

export const auth = app.auth()
export default app