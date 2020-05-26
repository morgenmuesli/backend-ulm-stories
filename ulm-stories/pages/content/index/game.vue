<template
  ><div>
    <Quiz
      v-if="this.queryData.chapter === 'ensinger'"
      @nextPage="nextPage"
    ></Quiz>
    <memory
      v-else-if="this.queryData.chapter === 'schwanenwirtin'"
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
    <PuzzleWrapper
      v-else-if="this.queryData.chapter === 'streicher'"
      @nextPage="nextPage"
    ></PuzzleWrapper>
    <HiddenObject
      v-else-if="this.queryData.chapter === 'holl'"
      @nextPage="nextPage"
    ></HiddenObject>
  </div>
</template>

<script>
import HiddenObject from "../../../components/content/games/hiddenobject/HiddenObject";
import GAME_FIELD from "~/components/content/games/memory/GameField";
import Quiz from "~/components/content/games/quiz/Quiz";
import FlappySchneider from "~/components/content/games/flappyschneider/FlappySchneider";
import Slider from "~/components/content/games/slider.vue";
import PuzzleWrapper from "~/components/content/games/dndpuzzle/PuzzleWrapper";

export default {
  components: {
    PuzzleWrapper,
    HiddenObject,
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
