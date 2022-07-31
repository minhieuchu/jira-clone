<template>
  <div class="navbar-container">
    <div class="app-symbol">
      <div></div>
    </div>
    <div class="search-issue">
      <i class="fa-solid fa-magnifying-glass"></i> <span>SEACH ISSUES</span>
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
  background: rgb(7, 71, 166);
  color: whitesmoke;
  display: flex;
  flex-direction: column;
  gap: 30px;
  font-size: 11px;
  text-align: left;
  font-weight: bold;
  padding: 32px 15px 20px 21px;
  box-sizing: border-box;
}
.navbar-container > .about {
  margin-top: auto;
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
  background: rgb(7, 71, 166);
}
.search-issue {
  margin-left: -1px;
}
span {
  display: none;
}
</style>