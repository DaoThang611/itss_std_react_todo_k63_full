import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDfyIwBF9fwoSEfthOKTLYOELUiYct_wX4",
  authDomain: "fir-sample-b1ade.firebaseapp.com",
  projectId: "fir-sample-b1ade",
  storageBucket: "fir-sample-b1ade.appspot.com",
  messagingSenderId: "600388345508",
  appId: "1:600388345508:web:145659f1f7a4823a489031"
};

firebase.initializeApp(firebaseConfig);

firebase.firestore().collection("todos").get().docs

firebase.firestore().collection("todos").add()

firebase.firestore().collection("todos").doc("document1").update([更新する情報])

firebase.firestore().collection("todos").doc("document1").delete()