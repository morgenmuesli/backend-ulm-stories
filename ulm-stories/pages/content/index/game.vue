<template
  ><div>
    <memory v-if="queryData.chapter === 'ensinger'"></memory>
    <memory v-else-if="queryData.chapter === 'aicher'"></memory>
  </div>
</template>

<script>
import GAME_FIELD from "~/components/content/games/memorie/GameField";
export default {
  components: {
    memory: GAME_FIELD
  },
  asyncData: ({ query }) => ({
    queryData: query
  })
};
</script>

<style scoped></style>
