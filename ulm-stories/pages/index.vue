<template>
  <div class="container">
    <div class="menu">
      <ul class="menu-list">
        <li><nuxt-link to="/game">Start Game</nuxt-link></li>
        <li><nuxt-link to="/preferences">Einstellungen</nuxt-link></li>
        <li><nuxt-link to="/about">Über uns</nuxt-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style>
.container {
  display: flex;
  align-items: center;
  height: 100%;
}
.menu-list {
  font-size: 42px;
}
</style>
