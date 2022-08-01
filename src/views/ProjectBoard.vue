<template>
  <p class="project-name">Projects / My Project Name / Kanban Board</p>
  <h2 class="page-title">Kanban board</h2>
  <div class="search-field">
    <i class="fa-solid fa-magnifying-glass"></i>
    <input type="text" />
  </div>
</template>

<style scoped>
.project-name {
  margin: 0;
  font-size: 15px;
}
.page-title {
  margin-top: 9px;
}
.search-field {
  position: relative;
}
.search-field > i {
  position: absolute;
  top: 7px;
  left: 7px;
  cursor: text;
  color: #b6b6b6;
}
.search-field > input {
  height: 27px;
  padding-left: 27px;
  border: 1px solid #d1d1d1;
  background: #f7f7f7;
  border-radius: 3px;
}
</style>
