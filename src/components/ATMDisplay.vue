<template>
    <v-container fluid>
        <v-row justify="center" align="center" style="min-height: 80vh;">
            <v-col cols="12" md="8">
            <v-card class="computer-screen">
                <v-card-title>
                <span class="headline">Welcome to intelliATM</span>
                <v-spacer></v-spacer>
                <v-badge
                    :content="messages"
                    :value="messages"
                    color="green"
                    overlap
                > 
                    <v-icon large>
                    mdi-access-point
                    </v-icon>
                    Connected
                </v-badge>
                </v-card-title>
                <v-card-text>
                <v-img
                    class="mt-4"
                    src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=600" 
                    alt="Descripción de la imagen"
                    max-width="25%"
                    height="auto"
                ></v-img>
                </v-card-text>
            </v-card>
            </v-col>
        </v-row>
        </v-container>
</template>
<!--Script-->
<script>
    export default {
    name: "ATMDisplay",
    data: () => ({
        
    }),
    };
</script>