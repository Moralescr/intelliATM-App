<template>
  <v-app>
    <!--Navigation drawer-->
    <v-navigation-drawer v-model="drawer" temporary app>
      <!--temporary-->
      <v-list>
        <v-list-item class="text-center" disabled>
          <v-list-item-title class="headline">IntelliATM v1.0</v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item v-for="(item, index) in items" :key="index" @click="selectRoute(item.path)">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!--App bar-->
    <v-app-bar class="appcolor" app>
      <v-toolbar-title class="white--text">
        <v-btn @click="drawer = !drawer" color="white" icon>
          <v-icon>mdi-menu</v-icon>
        </v-btn>
        IntelliATM
      </v-toolbar-title>
    </v-app-bar>
    <!--Main-->
    <v-main>
      <router-view />
    </v-main>
    <!--Footer-->
    <v-footer>
      <FooterApp />
    </v-footer>
  </v-app>
</template>
<script>
import FooterApp from "./views/FooterApp";
export default {
  name: "App",
  components: {
    FooterApp,
  },
  data() {
    return {
      drawer: false,
      items: [
        { title: "Cards", path: "/cards" },
      ],
    };
  },
  methods: {
    selectRoute(route) {
      this.$router.push(route);
    },
  },
};
</script>