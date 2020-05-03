<template>
  <component :is="currentComponent" parentData="Papa" />
</template>

<script>
export default {
  name: "testPage",
  data: () => ({
    currentComponent: "test"
  }),
  components: {
    test: () => import("../components/Test")
  }
};
</script>

<style scoped></style>
