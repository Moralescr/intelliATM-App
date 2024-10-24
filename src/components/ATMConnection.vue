<template>
  <v-app>
    <v-main>
      <v-card
        class="mx-auto mt-5"
        color="transparent"
        max-width="840"
        elevation="0"
      >
        <v-card>
          <v-card-title class="blue darken-4 white--text"
            >IntelliATM - ATM connection</v-card-title
          >
          <v-form @submit.prevent="connection()">
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field v-model="atmCode" label="Type a ATM code">{{
                      atmCode
                    }}</v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" md="6">
                    <v-select
                      variant="outlined"
                      v-model="host" 
                      label="Select a IP to connect"
                      :items="['10.15.1.51', '10.45.1.51']"
                    ></v-select>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="port"
                      label="Type a port to connect"
                      >{{ port }}</v-text-field
                    >
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn type="submit" color="blue accent-3" dark>Connect</v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
//Components
export default {
  name: "ATMConnection",
  components:{
  },
  data: () => ({
    atmCode: "",
    host: "",
    port: "",
  }),
  methods: {
    async connection() {
      let url = "http://localhost:3000/connect";
      let parametros = {
        atmCode: this.atmCode,
        host: this.host,
        port: this.port,
      };

      await this.$axios.post(url, parametros)
        .then((response) => {
          console.log(response);
          if (response.data === true){
            //if
          }else{
           //else 
          }
        })
        .catch((error) => {
          console.log(error.response);
        });
        this.atmCode = "";
        this.host = "";
        this.port = "";
    },
  },
};
</script>