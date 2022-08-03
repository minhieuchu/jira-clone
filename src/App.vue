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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
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
