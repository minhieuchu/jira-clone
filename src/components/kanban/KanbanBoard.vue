<template>
  <div v-if="!isLoading" class="kanban-container">
    <kanban-column
      v-for="(column, index) in columns"
      :key="index"
      :status="column.status"
    ></kanban-column>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import KanbanColumn from "./KanbanColumn.vue";
import { getKanbanColumns } from "@/services/jiraApi/JiraApiColumn";
import { getKanbanIssues } from "@/services/jiraApi/JiraApiIssue";
import ColumnModule from "@/store/modules/KanbanColumn";
import IssueModule from "@/store/modules/KanbanIssue";
import { IKanbanColumn } from "@/services/interfaces/IKanbanBoard";

export default defineComponent({
  components: {
    KanbanColumn,
  },
  data() {
    return {
      isLoading: true,
      columns: computed(() => ColumnModule.columns),
    };
  },
  created() {
    // These promises passed to Promise.all will always resolve,
    // as error is handled in the promise implementation.
    // In case of error, each promise will resolve with an empty array.
    Promise.all([getKanbanColumns(), getKanbanIssues()]).then(
      ([columns, issues]) => {
        if (!columns.length) {
          return;
        }
        columns.sort((a: IKanbanColumn, b: IKanbanColumn) => {
          if (a.columnIndex < b.columnIndex) {
            return -1;
          }
          return 1;
        });
        ColumnModule.setColumns(columns);
        IssueModule.setIssues(issues);
        this.isLoading = false;
      }
    );
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
