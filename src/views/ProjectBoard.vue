<template>
  <p class="project-name">Projects / My Project Name / Kanban Board</p>
  <div class="page-title">
    <div>Kanban board</div>
    <a
      href="https://github.com/developeers/jira-clone"
      target="_blank"
      class="github-link"
    >
      <img src="@/assets/GitHub.png" alt="" />
      <span>Github Repo</span>
    </a>
  </div>
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 45px;
  margin-bottom: 15px;
}
.page-title > div:first-child {
  font-size: 23px;
  font-weight: bold;
}
.github-link {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  background: #f1f1f1;
  width: 124px;
  height: 30px;
  border-radius: 4px;
  font-size: 14px;
  text-decoration: none;
  color: #393939;
}
.github-link:hover {
  background: #eeeeee;
}
.github-link > img {
  width: 15px;
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
  background: #f9f9f9;
  border-radius: 3px;
}
.search-field > input:hover {
  background: #f0f0f0;
}
.search-field > input:focus {
  background: white;
}
</style>
