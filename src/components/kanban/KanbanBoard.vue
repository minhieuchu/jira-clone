<template>
  <div class="kanban-container">
    <kanban-column
      v-for="(column, index) in columns"
      :key="index"
      :status="column"
    ></kanban-column>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import KanbanColumn from "./KanbanColumn.vue";

export default defineComponent({
  components: {
    KanbanColumn,
  },
  data() {
    return {
      columns: ["BACKLOG", "IN PROGRESS", "IN REVIEW", "DONE"],
    };
  },
});
</script>


<style scoped>
.kanban-container {
  display: flex;
  justify-content: space-around;
  gap: 15px;
  margin-top: 25px;
}
</style>