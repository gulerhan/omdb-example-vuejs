<template>
  <HeaderVue />
  <div>
    <div class="container my-12 mx-auto px-4 md:px-12">
      <v-row class="d-flex items-center" cols="12">
        <v-col xs="6" sm="3" lg="3">
          <v-autocomplete
            v-model="model"
            clearable
            v-model:search.input="search"
            :items="films"
            :loading="isLoading"
            hide-no-data
            hide-selected
            item-title="Title"
            item-value="API"
            label=""
            placeholder="Film ara"
            prepend-icon="mdi-database-search"
            return-object
          >
            <template v-slot:item="{ props, item }">
              <v-list-item
                v-bind="props"
                :prepend-avatar="item.raw.Poster"
                :title="item.raw.Title"
              ></v-list-item>
            </template>
          </v-autocomplete>
        </v-col>
      </v-row>
      <div class="d-flex flex-col items-center">
        <v-form v-model="valid" class="w-1/4">
          <v-col class="d-flex flex-col items-center mb-10">
            <p class="text-4xl font-sans">Film Ekle</p>
          </v-col>

          <v-col md="12">
            <v-text-field
              v-model="name"
              :rules="name"
              label="Adı"
              required
              hide-details="false"
              disabled
            ></v-text-field>
          </v-col>

          <v-col md="12">
            <v-text-field
              v-model="image"
              :rules="image"
              label="Görseli"
              required
              hide-details="false"
              disabled
            ></v-text-field>
          </v-col>

          <v-col md="12">
            <v-text-field
              v-model="point"
              :rules="point"
              label="Puanı"
              required
              hide-details="false"
              type="number"
              @keypress="isNumber($event)"
            ></v-text-field>
          </v-col>
        </v-form>

        <div class="">
          <v-btn @click="save" elevation="2" color="yellow lighten-1"
            >Kaydet</v-btn
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
import axios from "axios";
export default {
  name: "CreatePage",
  components: {
    HeaderVue,
  },
  data: () => ({
    snackbar: false,
    text: `Kaydedildi`,
    name: "",
    image: "",
    point: 0,
    films: [],
    filmName: "",
    descriptionLimit: 60,
    isLoading: false,
    model: null,
    search: null,
  }),
  watch: {
    search(val) {
      if (val.length < 3) return;
      if (this.isLoading) return;

      this.isLoading = true;
      this.films = [];
      const _this = this;
      axios
        .get(`http://www.omdbapi.com/?i=tt3896198&apikey=2cfbd7a0&s=${val}`)
        .then((res) => {
          res.data.Search.forEach((element) => {
            _this.films.push(element);
          });
        })
        .finally(() => (this.isLoading = false));
    },
    model(val) {
      this.name = val.Title;
      this.image = val.Poster;
    },
  },

  methods: {
    getFilmsByName() {
      if (this.filmName.length > 2) {
        fetch(
          `http://www.omdbapi.com/?i=tt3896198&apikey=2cfbd7a0&t=${this.filmName}`
        ).then((response) => response.json());
      }
    },
    save() {
      let savedFilms = JSON.parse(localStorage.getItem("films"));
      let film = {
        name: this.name,
        poster: this.image,
        point: this.point,
      };
      if (savedFilms == null) {
        savedFilms = [];
      }
      savedFilms.push(film);
      localStorage.setItem("films", JSON.stringify(savedFilms));
      this.snackbar = true;
    },

    isNumber(evt) {
      evt = evt ? evt : window.event;
      const charCode = evt.which ? evt.which : evt.keyCode;
      if ((charCode > 0 && charCode < 11) || charCode == 45) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
  },
  beforeCreate() {
    const user = localStorage.getItem("user");
    if (user == null) {
      this.$router.push({ path: "/login" });
    }
  },
};
</script>

<style scoped></style>
