<template>
  <div class="container">
    <video src="assets/video/sample.webm" autoplay></video>
    <div>
      <p>
        {{ subtitle }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Intro",
  components: {},
  data: () => ({
    subtitle: "Sample Text",
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
