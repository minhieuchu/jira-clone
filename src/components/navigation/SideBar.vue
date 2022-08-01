<template>
  <div class="sidebar-container">
    <div class="project-overview">
      <img src="@/assets/list.png" alt="" />
      <div class="project-name">My Project</div>
    </div>
    <div class="kanban-board">
      <i class="fa-solid fa-chalkboard"></i>
      <span>Kanban Board</span>
    </div>
    <div class="project-setting">
      <i class="fa-solid fa-gear"></i><span>Project settings</span>
    </div>
    <div class="line-break"></div>
    <div><i class="fa-solid fa-truck"></i><span>Releases</span></div>
    <div><i class="fa-solid fa-newspaper"></i><span>Pages</span></div>
    <div><i class="fa-solid fa-arrow-trend-up"></i><span>Reports</span></div>
    <div><i class="fa-solid fa-box-open"></i><span>Components</span></div>
  </div>
</template>

<style scoped>
.sidebar-container {
  position: fixed;
  top: 0;
  left: 60px;
  width: 220px;
  height: 100vh;
  padding: 15px;
  background: #f9f9f9;
  border-right: 1px solid #dddddd;
  font-size: 14px;
  font-weight: bold;
  color: #565656;
  box-sizing: border-box;
}
.sidebar-container > div {
  text-align: left;
  height: 30px;
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  padding: 20px 12px;
  box-sizing: border-box;
}
.sidebar-container > div:not(:first-child):not(.line-break):hover {
  background: #eaeaea;
}
.sidebar-container > .project-overview {
  display: flex;
  gap: 7px;
  height: fit-content;
  padding-top: 15px;
}
.project-overview > img {
  width: 38px;
  height: 35px;
  border-radius: 2px;
}
.sidebar-container > .line-break {
  height: 1px;
  padding: 0;
  background: #c2c2c2;
  margin-top: 15px;
  margin-bottom: 15px;
  cursor: default;
}
</style>
