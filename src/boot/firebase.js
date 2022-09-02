import * as firebase from "firebase/app"

import "firebase/firestore"

// Agregar configuración firebase:
var firebaseConfig = {
  apiKey: "AIzaSyCILeKpXjwHCM8A7ysXgSx2hZLQrWTBPPk",
  authDomain: "spells-652d9.firebaseapp.com",
  projectId: "spells-652d9",
  storageBucket: "spells-652d9.appspot.com",
  messagingSenderId: "989212963215",
  appId: "1:989212963215:web:bd9f7720864c6025aa1bfa",
  measurementId: "G-BG0DS47KMZ"
}

let firebaseApp = firebase.initializeApp(firebaseConfig)
let firebaseAuth = firebaseApp.auth()
let db = firebase.firestore();

export { firebaseAuth, db }