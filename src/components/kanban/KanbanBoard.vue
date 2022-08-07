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
import { getKanbanColumns } from "@/services/jiraApi/JiraApiColumn";
import { getKanbanIssues } from "@/services/jiraApi/JiraApiIssue";
import ColumnModule from "@/store/modules/KanbanColumn";

export default defineComponent({
  components: {
    KanbanColumn,
  },
  setup() {
    getKanbanColumns().then((res) => {
      ColumnModule.setColumns(res);
    });
    getKanbanIssues().then((res) => console.log(res));
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
