<template>
  <nav-bar></nav-bar>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "@/components/navigation/NavBar.vue";

export default defineComponent({
  components: {
    NavBar,
  },
});
</script>
