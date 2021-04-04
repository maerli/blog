 // Your web app's Firebase configuration

  var firebaseConfig = {
    apiKey: "AIzaSyAstCxPg8h-SAzXx8yH1KoPC3jgfcBW7y8",
    authDomain: "maerli-141f0.firebaseapp.com",
    databaseURL: "https://maerli-141f0.firebaseio.com",
    projectId: "maerli-141f0",
    storageBucket: "maerli-141f0.appspot.com",
    messagingSenderId: "1000880985813",
    appId: "1:1000880985813:web:77f1f8df25bb506887f45c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();
  let x = database.ref("count")
  x.set(firebase.database.ServerValue.increment(1))
    // x.on('value', (s)=>{
  // 	console.log(s.val())
  // })
