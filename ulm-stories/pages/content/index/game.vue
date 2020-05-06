<template
  ><div>
    <memory v-if="this.queryData.chapter === 'ensinger'"></memory>
    <memory v-else-if="this.queryData.chapter === 'aicher'"></memory>
    <memory v-else-if="this.queryData.chapter === 2"></memory></div
></template>

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
