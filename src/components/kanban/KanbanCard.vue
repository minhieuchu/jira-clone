<template>
  <div
    class="card-container"
    :id="cardId"
    draggable="true"
    @dragstart="onDragStart"
  >
    <p>{{ cardInfo.title }}</p>
    <div class="card-footer">
      <i
        v-if="cardInfo.type == IssueCategories.STORY"
        class="fa-solid fa-flag"
      ></i>
      <i v-else class="fa-regular fa-square-check"></i>
      <i
        v-if="cardInfo.priority == IssuePriorities.HIGH"
        class="fa-solid fa-arrow-up"
      ></i>
      <i v-else class="fa-solid fa-arrow-down"></i>
    </div>
  </div>
</template>

<script lang="ts">
import { IKanbanIssue } from "@/services/interfaces/IKanbanBoard";
import { defineComponent, PropType } from "vue";
import {
  IssueCategories,
  IssuePriorities,
} from "@/services/utils/kanbanDataUtils";

export default defineComponent({
  setup() {
    const cardId = Math.random().toString(36);
    return { cardId, IssueCategories, IssuePriorities };
  },
  props: {
    cardInfo: {
      type: Object as PropType<IKanbanIssue>,
      required: true,
    },
  },
  methods: {
    onDragStart(event: DragEvent) {
      if (!(event.target instanceof HTMLElement)) {
        return;
      }
      event.dataTransfer?.setData("cardId", event.target.id);
    },
  },
});
</script>

<style scoped>
.card-container {
  background: white;
  padding: 10px 8px;
  margin-bottom: 5px;
  border-radius: 4px;
  box-shadow: 0 2px 2px #c5c5c5;
  cursor: pointer;
}
.card-container:hover {
  background: rgb(246 246 246);
}
.card-container > p {
  font-size: 14px;
  color: #3d3d3d;
  margin-top: 0;
}
.card-footer {
  display: flex;
  gap: 9px;
  font-size: 15px;
}
.card-footer > :where(.fa-flag, .fa-arrow-down) {
  color: mediumseagreen;
}
.card-footer > .fa-square-check {
  color: #77c9e3;
  font-weight: bold;
}
.card-footer > .fa-arrow-up {
  color: #d63a3a;
}
</style>
