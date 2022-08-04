<template>
  <div class="column-container">
    <p class="column-name">
      {{ columnName }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    columnName: {
      type: String,
      required: true,
    },
  },
});
</script>


<style scoped>
.column-container {
  flex: 1 1;
  background: rgb(249 249 249);
  min-height: 180px;
  font-size: 12px;
  color: #878787;
  font-weight: bold;
  padding: 5px;
  box-sizing: border-box;
  border-radius: 5px;
}
.column-name {
  margin-top: 8px;
  margin-bottom: 8px;
  padding-left: 3px;
}
</style>
