import Vue from 'vue'
import VueCompositionAPI, { createApp, h } from '@vue/composition-api'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(VueCompositionAPI)

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4OzqTZ1PS6UeHPqFVv3Zo0GvPs8FBrEw",
  authDomain: "control-azucar-5ea36.firebaseapp.com",
  projectId: "control-azucar-5ea36",
  storageBucket: "control-azucar-5ea36.appspot.com",
  messagingSenderId: "95873635954",
  appId: "1:95873635954:web:943199238b2da0142094eb"
};

firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export { db, auth, storage };


createApp({
  router,
  render: () => h(App)
}).mount('#app')
