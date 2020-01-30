<template>
  <div class="home">
    <div class="container d-flex">
      <div class="row-col-3">
        {{ greeting("PETER   ") }}
        <Menu />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from "@/components/Menu.vue";

export default {
  name: "home",
  components: {
    Menu
  },
  data() {
    return {
      name: "Peter",
      count: 0
    };
  },
  methods: {}
};
</script>
