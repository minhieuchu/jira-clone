<template>
  <div class="column-container">
    <p class="column-name">
      {{ columnName }}
    </p>
    <kanban-card></kanban-card>
    <kanban-card></kanban-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import KanbanCard from "./KanbanCard.vue";

export default defineComponent({
  props: {
    columnName: {
      type: String,
      required: true,
    },
  },
  components: {
    KanbanCard,
  },
});
</script>


<style scoped>
.column-container {
  flex: 1 1;
  background: rgb(232 232 232 / 50%);
  min-height: 180px;
  font-size: 12px;
  color: #878787;
  font-weight: bold;
  padding: 5px;
  box-sizing: border-box;
  border-radius: 5px;
}
.column-name {
  margin-top: 10px;
  margin-bottom: 10px;
  padding-left: 3px;
}
</style>
