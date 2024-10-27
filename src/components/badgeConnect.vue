<script>
export default {
    name: "badgeConnect",
    props: {
        badge: {
            type: Object,
        }
    },
};
</script>
<template>
    <div>
        <v-badge :color="badge.color" overlap>
            <v-icon :color="badge.color" large> {{ badge.icon }} </v-icon>
            {{ badge.color === "green" ? "In service" : "Online"}}
        </v-badge>
    </div>
</template>