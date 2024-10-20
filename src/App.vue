<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon icon="mdi-dots-vertical"></v-app-bar-nav-icon>
      <v-app-bar-title>{{ title }}</v-app-bar-title>
    </v-app-bar>
    <v-spacer></v-spacer>
    <v-main>
      <ATMConnection />
    </v-main>
  </v-app>
</template>

<script>
//Components
import ATMConnection from "./components/ATMConnection.vue";
//Views components
//import HomeApp from "./views/HomeApp";

export default {
  name: "App",

  components: {
    //HomeApp,
    ATMConnection,
  },
  data: () => ({
    title: "IntelliATM App",
  }),
};
</script>
