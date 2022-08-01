<template>
  <nav-bar></nav-bar>
  <side-bar></side-bar>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "@/components/navigation/NavBar.vue";
import SideBar from "@/components/navigation/SideBar.vue";

export default defineComponent({
  components: {
    NavBar,
    SideBar,
  },
});
</script>
