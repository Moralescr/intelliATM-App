<script>
export default {
    name: "ConnectionVue",
    components: {    
    },
    data: () => ({
        dialog: false,
        atmCode: "",
        host: "",
        port: "",
        selectOptions: ['10.15.1.51', '10.45.1.51'],
        badge: { color: "red", icon: "mdi-wifi-alert" }
    }),
    methods: {
        async connection() {
            let url = "http://localhost:3000/connect";
            let parametros = {
                atmCode: this.atmCode,
                host: this.host,
                port: this.port,
            };
            const response = await this.$axios.post(url, parametros)
            console.log(response);
            this.atmCode = "";
            this.host = "";
            this.port = "";
            this.sendStatus(response.data); //Send connection status
        },
        sendStatus(isConnected) {
            this.$emit('atmStatus', isConnected);
        }
    }
}
</script>
<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary" dark v-bind="attrs" v-on="on">
                    Connection
                </v-btn>
            </template>
            <v-card>
                <v-card-title class="appcolor white--text">
                    <span class="text-h5">Connection settings</span>
                </v-card-title>
                <v-form @submit.prevent="connection()">
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field v-model="atmCode" label="ATM code" hint="Luno" required></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-select v-model="host" :items="selectOptions" variant="outlined" menu-props="auto"
                                        label="Select a host"></v-select>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field v-model="port" label="Port" hint="Port to connect" required></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field label="Type a master key" type="password" hint="Master key encryption"
                                        required></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field label="Type a working key" type="password" hint="PIN key encryption"
                                        required></v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="dialog = false">
                            Close
                        </v-btn>
                        <v-btn type="submit" color="blue darken-1" text @click="dialog = false">
                            Connect
                        </v-btn>
                    </v-card-actions>
                </v-form>
            </v-card>
        </v-dialog>
    </v-row>
</template>