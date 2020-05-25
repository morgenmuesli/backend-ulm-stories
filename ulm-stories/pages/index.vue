<template>
  <div class="container">
    <div class="menu">
      <ul class="menu-list">
        <li><nuxt-link to="/game">Start Game</nuxt-link></li>
        <li><nuxt-link to="/preferences">Einstellungen</nuxt-link></li>
        <li><nuxt-link to="/about">Über uns</nuxt-link></li>
        <li><nuxt-link to="/slider_test">Slider Test</nuxt-link></li>
        <li>
          <nuxt-link to="/flappy_schneider_test"
            >Flappy Schneider Test</nuxt-link
          >
        </li>
        <li><nuxt-link to="/memory_test">Memory Test</nuxt-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.container {
  display: grid;
  align-content: center;

  height: 100%;
}
.menu-list {
  font-size: 42px;
}
</style>
