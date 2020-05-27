<template>
  <div class="container">
    <div class="menu">
      <ul class="menu-list">
        <li>
          <nuxt-link
            :to="{
              path: '/content',
              query: { chapter: 'intro', scene: 0, direct: true }
            }"
            >Start Game</nuxt-link
          >
        </li>
        <li><nuxt-link to="/preferences">Einstellungen</nuxt-link></li>
        <li><nuxt-link to="/about">Über uns</nuxt-link></li>
        <li><nuxt-link to="/impressum">Impressum</nuxt-link></li>
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
  font-family: "Ubuntu", sans-serif;
}
</style>
