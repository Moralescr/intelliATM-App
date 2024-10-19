<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon icon="mdi-dots-vertical"></v-app-bar-nav-icon>
      <v-app-bar-title>{{ title }}</v-app-bar-title>
    </v-app-bar>
    <v-spacer></v-spacer>
    <v-main>
      <MainApp />
    </v-main>
  </v-app>
</template>

<script>
import MainApp from "./components/MainApp";

export default {
  name: "App",

  components: {
    MainApp
  },
  data: () => ({
    title: "IntelliATM App",
  }),
};
</script>
