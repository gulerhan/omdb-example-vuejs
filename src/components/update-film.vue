<template>
  <HeaderVue />
  <div>
    <div class="container my-12 mx-auto px-4 md:px-12">
      <div class="d-flex flex-col items-center">
        <v-form v-model="valid" class="w-1/4">
          <v-col class="d-flex flex-col items-center mb-10">
            <p class="text-4xl font-sans">Film Güncelleme</p>
          </v-col>
          <v-col md="12">
            <v-text-field
              v-model="film.name"
              :rules="name"
              label="Adı"
              required
              hide-details="false"
              disabled
            ></v-text-field>
          </v-col>

          <v-col md="12">
            <v-text-field
              v-model="film.poster"
              :rules="image"
              label="Görseli"
              required
              hide-details="false"
              disabled
            ></v-text-field>
          </v-col>

          <v-col md="12">
            <v-text-field
              v-model="film.point"
              :rules="point"
              label="Puanı"
              :counter="10"
              required
              hide-details="false"
            ></v-text-field>
          </v-col>
        </v-form>

        <div class="">
          <v-btn @click="updateFilm()" elevation="2" color="yellow lighten-1"
            >Güncelle</v-btn
          >
        </div>
        <v-snackbar v-model="snackbar">
          {{ text }}

          <template v-slot:actions>
            <v-btn color="red" variant="text" @click="snackbar = false">
              Kapat
            </v-btn>
          </template>
        </v-snackbar>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderVue from "./page-header.vue";
export default {
  name: "UpdateFilm",
  components: {
    HeaderVue,
  },
  data: () => ({
    snackbar: false,
    text: `Güncellendi`,
    film: {
      name: "",
      poster: "",
      point: "",
    },
  }),
  beforeCreate() {
    const user = localStorage.getItem("user");
    if (user == null) {
      this.$router.push({ path: "/login" });
    }
  },
  methods: {
    updateFilm() {
      this.snackbar = true;
      const index = this.$route.params.id;
      const list = JSON.parse(localStorage.getItem("films"));
      list[index].point = this.film.point;
      localStorage.setItem("films", JSON.stringify(list));
    },
  },
  mounted() {
    const index = this.$route.params.id;
    const list = JSON.parse(localStorage.getItem("films"));
    const film = list[index];
    this.film = film;
  },
};
</script>

<style scoped></style>
