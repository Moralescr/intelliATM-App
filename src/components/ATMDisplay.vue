<template>
    <v-container fluid>
        <v-row justify="" style="min-height: 80vh;">
            <v-col cols="12" md="8">
                <v-card height="800">
                    <v-card-title>
                        <badgeConnectVue :badge="badge"/>
                        <v-spacer></v-spacer>
                        <ConnectionVue @atmStatus="connectionStatus"/>
                    </v-card-title>
                    <v-card-text>
                        <v-img class="mt-4"
                            src="@/assets/icon023.jpg"
                            alt="Descripción de la imagen" height="700px"></v-img>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<!--Script-->
<script>
import BadgeConnectVue from './badgeConnect.vue';
import ConnectionVue from './Connection.vue';
export default {
    name: "ATMDisplay",
    components: {
        ConnectionVue,
        BadgeConnectVue,
    },
    data: () => ({
        badge: { color: "red", icon: "mdi-wifi-alert" }
    }),
    methods: {
        connectionStatus(isConnected){
            if (isConnected) {
                this.badge.color = "green";
                this.badge.icon = "mdi-wifi";
            }
        }
    },
};
</script>