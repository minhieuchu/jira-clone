<template>
  <nav-bar></nav-bar>
  <side-bar></side-bar>
  <div class="page-content">
    <router-view />
  </div>
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

<style scoped>
.page-content {
  position: fixed;
  top: 0;
  left: 280px;
  width: calc(100% - 280px);
  padding: 20px 36px;
  text-align: left;
  box-sizing: border-box;
}
</style>
