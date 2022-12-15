<template>
  <div>
    <div class="container my-12 mx-auto px-4 md:px-12">
      <div class="d-flex flex-col items-center">
        <v-form v-model="valid" class="w-1/4">
          <v-col class="d-flex flex-col items-center mb-10">
            <p class="text-4xl font-sans">Giriş Yap</p>
          </v-col>

          <v-col md="12">
            <v-text-field
              v-model="name"
              :rules="name"
              label="Adı"
              required
              hide-details="false"
            ></v-text-field>
          </v-col>
          <v-col md="12">
            <v-text-field
              v-model="password"
              :rules="password"
              label="Şifre"
              required
              hide-details="false"
              class="pt-5"
            ></v-text-field>
          </v-col>
        </v-form>

        <v-btn
          elevation="2"
          color="yellow lighten-1"
          @click="login"
          @keyup.enter="login"
          >Giriş</v-btn
        >
      </div>
    </div>
    <v-snackbar v-model="isShowSnackbar" color="red" elevation="24">
      Kullanıcı bilgileri yanlış
      <template v-slot:actions>
        <v-btn color="white" variant="text" @click="isShowSnackbar = false">
          Kapat
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      name: "",
      password: "",
      isShowSnackbar: false,
    };
  },
  methods: {
    login() {
      if (this.name === "admin" && this.password === "123456") {
        localStorage.setItem(
          "user",
          JSON.stringify({
            name: this.name,
            password: this.password,
          })
        );
        this.$router.push({ path: "/listing" });
      } else {
        this.isShowSnackbar = true;
      }
    },
  },
};
</script>

<style scoped></style>
