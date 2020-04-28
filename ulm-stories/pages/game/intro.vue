<template>
  <div class="container">
    <p>
      Du besuchst
    </p>
  </div>
</template>

<script>
export default {
  name: "intro",
  data: () => ({
    text: [
      "Du besuchst deinen Onkel Professor Alfred Zweistein in seinem Labor.",
      "Professor Zweistein arbeitet gerade auf Hochtouren an einer neuen Art der Energiegewinnung mithilfe eines Schwarzen Loches.",
      "Da er jedoch nicht mehr weiterweiß, benötigt er Hilfe. Deshalb versucht er Professor Albert Einstein mit seiner selbst gebauten Zeitmaschine in unsere Zeit zu holen.",
      "Doch da ... passiert es..."
    ]
  }),
  methods: {
    next: () => (this.currentID = this.currentID + 1)
  }
};
</script>

<style scoped></style>
