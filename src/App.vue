<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-3">
      <div class="container-fluid">
        <router-link class="navbar-brand ml-3" to="/home">
          <h1>Control de Azúcar 🩸</h1>
          <!-- <img
            src="\images\logo_gestor.svg"
            width="100"
            height="35"
            class="d-inline-block align-top"
            alt="image"
            loading="lazy"
          /> -->
          <!-- <span class="h5 ml-1 label-section"><strong>Intranet</strong> </span> -->
        </router-link>
        <button
          v-if="getters.user"
          class="navbar-toggler mb-3 mt-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div v-if="getters.user">
            <ul class="navbar-nav"></ul>
          </div>
          <ul class="navbar-nav ms-auto text-end">
            <!-- Guest Links Right -->

            <!-- Authentication Links Right -->
            <div v-if="getters.user">
              <button
                @click="logout()"
                type="button"
                class="btn btn-outline-danger btn-sm"
              >
                Cerrar Sesión ✌️🚪
              </button>
            </div>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      getters: this.$store.getters,
    };
  },
  methods: {
    logout() {
      console.log("Logout");
      if (this.$store.getters.localStorage("user")) {
        this.$store.commit("removeLocalStorage", "user");
        this.$router.go(0);
      }
    },
  },
};
</script>

<style>
.navbar-light .navbar-toggler-icon {
  width: 15px !important;
  height: 10px !important;
}
</style>
