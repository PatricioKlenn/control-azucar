<template>
  <div class="text-center">
    <div class="card">
      <div class="card-body text-center">
        <h3>Ingresar 🔐</h3>
        <button @click="googleSignIn" class="btn btn-primary btn-sm">
          <img src="@/assets/Google-Icon.png" width="20" height="20" /> Ingresar
          con Google
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
export default {
  props: ["user"],
  methods: {
    googleSignIn: function () {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const loggedUser = result.user;
          this.$store.commit("setLocalStorage", {
            key: "user",
            value: loggedUser,
          });
          this.$router.replace("bloodSugar");
          // ...
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    },
  },
};
</script>

<style></style>
