<template>
  <div>
    <component
      :is="currentComponent"
      :parentData="dataForChild"
      @nextcontent="updateContent"
    >
    </component>
  </div>
</template>

<script>
import Test from "../../components/Test";
export default {
  components: {
    Video: () => import("../../components/content/VideoContent")
  },
  data: () => ({
    chapter: this.$route.params.chapter,
    componentKey: 0,
    currentComponent: "Test",
    dataForChild: {
      msg: "",
      posts: []
    }
  }),
  mounted() {
    this.forceRerender();
  },
  methods: {
    activateComponent(
      component,
      data = { posts: [], msg: "this is a default msg." }
    ) {
      this.currentComponent = component;
      this.dataForChild = data;
    },
    updateContent: () => {
      //TODO
      alert("next page");
    },

    forceRerender() {
      this.componentKey += 1;
    }
  }
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}
</style>
