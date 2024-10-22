<template>
  <!-- App.vue -->
  <v-app>
    <v-navigation-drawer app>
      <!-- -->
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon icon="mdi-dots-vertical"></v-app-bar-nav-icon>
      <v-app-bar-title>{{ title }}</v-app-bar-title>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>

        <!-- If using vue-router -->
      
      </v-container>
    </v-main>

    <v-footer app>
      <FooterApp/>
    </v-footer>
  </v-app>
</template>
  
<script>
  import FooterApp from './FooterApp.vue';
  export default {
    name: "HomeApp",
    components:{
      FooterApp,
    },
    data: () => ({
      title: "IntelliATM"
    }),
  };
</script>