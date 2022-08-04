<template>
  <div class="card-container">
    <p>{{ cardContent }}</p>
    <div class="card-footer">
      <!-- <i class="fa-regular fa-flag"></i> -->
      <i class="fa-regular fa-square-check"></i>
      <i class="fa-solid fa-arrow-up"></i>
      <!-- <i class="fa-solid fa-arrow-down"></i> -->
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
  data() {
    return {
      category: CardCategories.STORY,
      cardContent:
        "Create authentication views and intergrate with existing system",
    };
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
</style>
