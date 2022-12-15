<template>
  <div class="bg-slate-200 p-3 d-flex justify-between">
    <router-link to="/listing" href=""
      ><img src="../assets/imgs/IMDB.png" alt="" class="w-20"
    /></router-link>
    <div>
      <router-link to="/create" href="" class="pr-4"
        ><v-btn elevation="2" color="yellow lighten-1"
          >Film Ekle</v-btn
        ></router-link
      >
      <router-link to="/" href=""
        ><v-btn elevation="2" color="red lighten-1" @click="logOut"
          >Çıkış yap</v-btn
        ></router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderVue",
  props: {
    msg: String,
  },
  methods: {
    logOut() {
      localStorage.removeItem("user");
      this.$router.push({ path: "/login" });
    },
  },
};
</script>

<style scoped></style>
