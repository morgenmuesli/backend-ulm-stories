<template>
  <div class="container">
    <img
      src="../assets/img/logo/logo_new.svg"
      class="miu"
      alt="Menschen in Ulm Logo"
    />
    <div class="menu">
      <ul class="menu-list">
        <li>
          <nuxt-link
            :to="{
              path: '/content',
              query: { chapter: 'intro', scene: 0, direct: true }
            }"
            ><Button class="btn">Spiel starten</Button></nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/"
            ><Button class="btn">Einstellungen</Button></nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/about"
            ><Button class="btn">Über Uns</Button></nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/impressum"
            ><Button class="btn">Impressum</Button></nuxt-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.container {
  display: grid;
  align-content: center;
  background-image: url("../assets/img/background/ensinger.jpg");
  height: 100vh;
  width: 100vw;
  background-size: cover;
}
.logo {
  height: auto;
  width: 90%;
}
.menu {
  display: flex;
  justify-content: center;
}
.btn {
  height: 10vh;
  width: 80vw;
  border: none;
  background-color: whitesmoke;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 4px;
  font-family: "Ubuntu", sans-serif;
  font-weight: bolder;
  color: #272727;
  font-size: larger;
}
.miu {
  padding: 5%;
}
</style>
