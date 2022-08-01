<template>
  <div class="navbar-container">
    <div class="app-symbol">
      <div></div>
    </div>
    <div class="search-issue">
      <i class="fa-solid fa-magnifying-glass"></i> <span>SEARCH ISSUES</span>
    </div>
    <div class="create-issue">
      <i class="fa-solid fa-plus"></i> <span>CREATE ISSUE</span>
    </div>
    <div class="about">
      <i class="fa-regular fa-circle-question"></i> <span>ABOUT</span>
    </div>
  </div>
</template>

<style scoped>
.navbar-container {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 60px;
  background: #4b4bb7;
  color: whitesmoke;
  display: flex;
  flex-direction: column;
  font-size: 11px;
  text-align: left;
  font-weight: bold;
  box-sizing: border-box;
  transition: width 0.2s;
  z-index: 1;
}
.navbar-container:hover {
  width: 170px;
}
.navbar-container span {
  visibility: hidden;
  overflow: hidden;
  white-space: nowrap;
}
.navbar-container:hover span {
  visibility: visible;
}
.navbar-container > div {
  display: flex;
  align-items: center;
  gap: 15px;
  padding-left: 21px;
  cursor: pointer;
}
.navbar-container > div:first-child {
  padding-left: 0;
  margin-left: 20px;
  margin-top: 36px;
  margin-bottom: 20px;
}
.navbar-container > div:not(:first-child) {
  height: 40px;
}
.navbar-container > div:not(:first-child):hover {
  background: rgba(255, 255, 255, 0.1);
}
.navbar-container > .about {
  margin-top: auto;
  margin-bottom: 20px;
}
.navbar-container i {
  font-size: 19px;
}
.app-symbol {
  width: 20px;
  height: 20px;
  margin-left: -2px;
  background: #daf0ff;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(45deg);
}
.app-symbol > div {
  width: 6px;
  height: 6px;
  background: #4b4bb7;
}
.search-issue {
  margin-left: -1px;
}
</style>
