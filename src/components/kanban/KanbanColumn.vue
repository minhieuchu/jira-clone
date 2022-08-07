<template>
  <div
    class="column-container"
    ref="columnContainer"
    @dragover="onDragOver"
    @drop="onDrop"
  >
    <p class="column-name">
      {{ convertColumnStatus(status) }}
    </p>
    <kanban-card
      v-for="(issue, index) in issues"
      :key="index"
      :cardInfo="issue"
    ></kanban-card>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import KanbanCard from "./KanbanCard.vue";
import IssueModule from "@/store/modules/KanbanIssue";

export default defineComponent({
  props: {
    status: {
      type: String,
      required: true,
    },
  },
  components: {
    KanbanCard,
  },
  setup(props) {
    const issues = computed(() => IssueModule.issuesWithStatus(props.status));
    return { issues };
  },
  methods: {
    onDragOver(event: DragEvent) {
      event.preventDefault();
    },
    onDrop(event: DragEvent) {
      event.preventDefault();
      const cardId = event.dataTransfer?.getData("cardId") || "";
      const columnContainer = this.$refs.columnContainer as HTMLElement;
      // eslint-disable-next-line
      columnContainer.appendChild(document.getElementById(cardId)!);
    },
    convertColumnStatus(status: string): string {
      return status.toUpperCase().replaceAll("_", " ");
    },
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
  padding-left: 7px;
}
</style>
