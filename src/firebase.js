import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBxhyGyH2X4SLVSkrmva9Bvhw3GLl71gh4",
    authDomain: "todo-85c4f.firebaseapp.com",
    projectId: "todo-85c4f",
    storageBucket: "todo-85c4f.appspot.com",
    messagingSenderId: "856861952347",
    appId: "1:856861952347:web:ea17e49f0677caa6e7f27e"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase
  export const database = firebase.database()
  export const auth = firebase.auth() 
  export const storage = firebase.storage() // это для файлов
  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  export const messaging = firebase.messaging()
  // будет деплоиться на github  в отдельной папке или на  firebase