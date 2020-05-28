<template>
  <div class="frame">
    <div class="frame-content">
      <nuxt />
      <nav class="level bottom-menu is-mobile">
        <p class="level-item has-text-centered">
          <nuxt-link to="/game/inventory" class="link is-info"
            >Inventar</nuxt-link
          >
        </p>
        <p class="level-item has-text-centered">
          <nuxt-link to="/game/phoneCall" class="link is-info"></nuxt-link>
        </p>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Phone",
  components: {},
  mounted() {
    this.$store.dispatch("profCall/updateNewMessages");
  },
  computed: {
    isProfCalling() {
      return this.$store.getters["profCall/checkifProfIsCalling"];
    }
  }
};
</script>

<style scoped lang="scss">
.frame {
  width: 100vw;
  height: 100vh;
  background-image: url("../assets/img/phone.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center center;
  display: flex;
  justify-content: center;

  .frame-content {
    width: 90%;
    height: 85%;
    position: relative;
    top: 7.5%;
  }
  .bottom-menu {
    background-color: lightgray;
    height: 10%;
    position: relative;
    bottom: 0;
    width: 100%;
  }
}
</style>
