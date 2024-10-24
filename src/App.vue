<template>
  <v-app>
    <!--Navigation drawer-->
    <v-navigation-drawer
      v-model="drawer"
      app
      >
      <!--temporary-->
      <v-list>
        <v-list-item class="text-center" disabled>
          <v-list-item-title class="headline">IntelliATM v1.0</v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="selectRoute(item.path)"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!--App bar-->
    <v-app-bar class="appbar"  app>
      <v-toolbar-title class="white--text">
        <v-btn @click="drawer = !drawer" icon>
          <v-icon>mdi-menu</v-icon>
        </v-btn> 
      </v-toolbar-title>
    </v-app-bar>
    <!--Main-->
    <v-main>
      <router-view/>
    </v-main>
    <!--Footer-->
    <v-footer>
      <FooterApp/>
    </v-footer>
  </v-app>
</template>
<script>
import FooterApp from './views/FooterApp'; 
export default {
  name: "App",
  components: {
    FooterApp,
  },
  data() {
    return {
      drawer: false,
      items: [
        { title: 'ATM connection', path: '/connection' },
        { title: 'ATM display', path: '/atm'  },
      ],
      //selectedItem: null,
    };
  },
  methods: {
    selectRoute(route) {
      //this.selectedItem = item.title;
      //this.drawer = false; 
      this.$router.push(route);
    },
  },
};
</script>