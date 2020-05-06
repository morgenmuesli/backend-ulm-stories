<template>
  <div class="player">
    <h1>#{{ number }}</h1>
    <h2>{{ name }}</h2>
  </div>
</template>

<script>
export default {
  validate({ params }) {
    return !isNaN(+params.id);
  },
  asyncData({ params, error }) {
    const user = [
      { id: 1, name: "Kobe Bryant", number: 24 },
      { id: 2, name: "Michael Jordan", number: 23 },
      { id: 3, name: "Stephen Curry", number: 30 },
      { id: 4, name: "Lebron James", number: 23 },
      { id: 5, name: "Kevin Durant", number: 35 },
      { id: 6, name: "Kyrie Irving", number: 2 }
    ].find(user => String(user.id) === params.id);
    if (!user) {
      return error({ message: "User not found", statusCode: 404 });
    }
    return user;
  },
  head() {
    return {
      title: this.name
    };
  }
};
</script>

<style scoped>
.player {
  text-align: center;
  margin-top: 100px;
  font-family: sans-serif;
}
</style>
