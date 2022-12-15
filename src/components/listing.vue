<template>
  <HeaderVue />
  <div class="container my-12 mx-auto px-4 md:px-12">
    <v-row class="d-flex" cols="12">
      <v-col xs="3" sm="4" lg="2"
        ><v-select
          :items="sortItems"
          label="Sırala"
          v-model="sortBy"
          solo
        ></v-select>
      </v-col>
      <v-col xs="6" sm="6" lg="3"
        ><v-text-field
          v-model="filmName"
          @keyup="getFilmsByName"
          @keypress="getFilmsByName"
          label="Film ara"
        ></v-text-field
      ></v-col>
    </v-row>
    <div
      v-if="!filteredFilms.length"
      class="flex flex-row align-center justify-center pt-36"
    >
      <p class="text-xl font-sans text-slate-400">
        Listelenecek film bulunamadı
      </p>
    </div>
    <div class="text-center"></div>
    <v-dialog v-model="dialog">
      <v-card class="flex w-80 mx-auto">
        <v-card-text> Silinsin mi ? </v-card-text>
        <v-card-actions>
          <v-btn color="red" @click="deleteCard()" class="ml-auto mr-0"
            >Sil</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-row>
      <v-col
        cols="6"
        sm="4"
        md="3"
        lg="2"
        class="relative"
        v-for="(item, index) in filteredFilms.slice(0, showedFilmCount)"
        :key="index"
      >
        <v-hover v-slot="{ isHovering, props }">
          <v-card
            :elevation="isHovering ? 12 : 2"
            :class="{ 'on-hover': isHovering }"
            class="flex flex-wrap"
            v-bind="props"
          >
            <div class="d-flex">
              <button
                v-if="isHovering"
                @click="openDeleteModal(index)"
                color="primary"
                class="absolute z-10 w-7 bg-red-500 rounded-full font-sans absolute right-1 top-1 p-1 text-white text-sm md:text-xs"
              >
                Sil
              </button>
              <button
                v-if="isHovering"
                @click="update(index)"
                class="absolute z-10 bg-yellow-500 rounded-full font-sans absolute p-1 right-10 top-1 text-white text-sm md:text-xs"
              >
                Güncelle
              </button>
            </div>
            <div
              v-if="isHovering"
              class="absolute text-center d-flex flex-column left-0 right-0 top-32 text-white font-bold xl:top-32"
            >
              <h1 class="text-lg md:text-xl lg:text-xl xl:text-2xl">
                {{ item.name }}
              </h1>
              <h1
                class="text-yellow pt-12 text-5xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl"
              >
                {{ item.point }}
              </h1>
            </div>
            <img
              alt="Placeholder"
              class="block h-80 w-full object-cover"
              :src="item.poster"
            />
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
    <div
      v-if="filteredFilms.length > 10 && showedFilmCount < filteredFilms.length"
      class="d-flex flex-row justify-space-around pt-10"
    >
      <v-btn elevation="2" color="yellow lighten-1" @click="isShowMore()"
        >Devamını göster</v-btn
      >
    </div>
  </div>
</template>

<script>
import HeaderVue from "./page-header.vue";
export default {
  name: "ListingPage",
  props: {
    msg: String,
  },
  components: {
    HeaderVue,
  },
  data() {
    return {
      films: [],
      filteredFilms: [],
      filmName: "",
      sortItems: ["Artan puan", "Azalan puan"],
      sortBy: "",
      showedFilmCount: 10,
      dialog: false,
      deletedFilmIndex: 0,
    };
  },
  methods: {
    deleteCard() {
      this.films.splice(this.deletedFilmIndex, 1);
      this.filteredFilms.slice(this.deletedFilmIndex, 1);
      localStorage.setItem("films", JSON.stringify(this.films));
      this.dialog = false;
    },
    sortByAsc(a, b) {
      return parseInt(a.point) - parseInt(b.point);
    },
    sortByDesc(a, b) {
      return parseInt(b.point) - parseInt(a.point);
    },
    update(index) {
      this.$router.push({ path: `/update/${index}` });
    },
    getFilmsByName() {
      this.filteredFilms = this.films.filter((film) => {
        return film.name.toLowerCase().includes(this.filmName.toLowerCase());
      });
    },
    isShowMore() {
      this.showedFilmCount += 10;
    },
    openDeleteModal(index) {
      this.dialog = true;
      this.deletedFilmIndex = index;
    },
  },
  beforeCreate() {
    const user = localStorage.getItem("user");
    if (user == null) {
      this.$router.push({ path: "/login" });
    }
  },
  mounted() {
    const filmsData = JSON.parse(localStorage.getItem("films"));
    this.films = filmsData;
    this.filteredFilms = filmsData;
  },
  watch: {
    sortBy(newValue) {
      if (newValue == "Artan puan") {
        this.films.sort(this.sortByAsc);
      } else {
        this.films.sort(this.sortByDesc);
      }
    },
  },
};
</script>

<style scoped>
.v-card {
  transition: opacity 0.4s ease-in-out;
}

.v-card.on-hover {
  opacity: 0.7;
}

.show-btns {
  color: rgb(44, 44, 44) !important;
}
</style>
