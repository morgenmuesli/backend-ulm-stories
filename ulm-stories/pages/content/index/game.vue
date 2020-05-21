<template
  ><div>
    <Quiz v-if="this.queryData.chapter === 'ensinger'"></Quiz>
    <memory v-else-if="this.queryData.chapter === 'ensinger'"></memory>
    <FlappySchneider
      v-else-if="this.queryData.chapter === 'berblinger'"
    ></FlappySchneider>
    <PuzzleDND v-else-if="this.queryData.chapter === 'streicher'"></PuzzleDND>
  </div>
</template>

<script>
import GAME_FIELD from "~/components/content/games/memorie/GameField";
import Quiz from "~/components/content/games/quiz/Quiz";
import FlappySchneider from "~/components/content/games/flappyschneider/FlappySchneider";
import PuzzleDND from "~/components/content/games/dndpuzzle/PuzzleDND";

export default {
  components: {
    PuzzleDND,
    FlappySchneider,
    Quiz,
    memory: GAME_FIELD
  },
  asyncData: ({ query }) => ({
    queryData: query
  })
};
</script>

<style scoped></style>
