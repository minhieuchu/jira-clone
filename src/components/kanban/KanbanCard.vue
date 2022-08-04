<template>
  <div
    class="card-container"
    :id="cardId"
    draggable="true"
    @dragstart="onDragStart"
  >
    <p>{{ cardContent }} - {{ cardId }}</p>
    <div class="card-footer">
      <!-- <i class="fa-solid fa-flag"></i> -->
      <i class="fa-regular fa-square-check"></i>
      <i class="fa-solid fa-arrow-up"></i>
      <!-- <i class="fa-solid fa-arrow-down"></i>s -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export const CardCategories = {
  STORY: "story",
  TASK: "task",
};

export default defineComponent({
  setup() {
    const cardId = Date.now().toString();
    return { cardId };
  },
  data() {
    return {
      category: CardCategories.STORY,
      cardContent:
        "Create authentication views and intergrate with existing system",
    };
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
