<template
  ><div>
    <Quiz
      v-if="this.queryData.chapter === 'ensinger'"
      @nextPage="nextPage"
    ></Quiz>
    <memory
      v-else-if="this.queryData.chapter === 'schwanenwirt'"
      @nextPage="nextPage"
    ></memory>
    <FlappySchneider
      v-else-if="this.queryData.chapter === 'berblinger'"
      @nextPage="nextPage"
    ></FlappySchneider>
    <Slider
      v-else-if="this.queryData.chapter === 'aicher'"
      @nextPage="nextPage"
    ></Slider>
    <PuzzleDND
      v-else-if="this.queryData.chapter === 'streicher'"
      @nextPage="nextPage"
    ></PuzzleDND>
    <HiddenObject
      v-else-if="this.queryData.chapter === 'holl'"
      @nextPage="nextPage"
    ></HiddenObject>
  </div>
</template>

<script>
import HiddenObject from "../../../components/content/games/hiddenobject/HiddenObject";
import GAME_FIELD from "~/components/content/games/memorie/GameField";
import Quiz from "~/components/content/games/quiz/Quiz";
import FlappySchneider from "~/components/content/games/flappyschneider/FlappySchneider";
import PuzzleDND from "~/components/content/games/dndpuzzle/PuzzleDND";
import Slider from "~/components/content/games/slider.vue";

export default {
  components: {
    HiddenObject,
    PuzzleDND,
    FlappySchneider,
    Quiz,
    Slider,
    memory: GAME_FIELD
  },
  asyncData: ({ query }) => ({
    queryData: query
  }),
  methods: {
    nextPage() {
      this.$emit("nextPage");
    }
  }
};
</script>

<style scoped></style>
