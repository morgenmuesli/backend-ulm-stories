<template>
  <div class="menu-list nav flex-column">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>

export default {
  name: "Menu",

};
</script>

<style lang="scss" scoped>
nav {
  background-color: #42b983;
  height: 300px;
},
  menu-list:hover{

  }
</style>
