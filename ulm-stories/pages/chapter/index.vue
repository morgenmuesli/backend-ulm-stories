<template>
  <div>
    <VideoContent :parentData="parentData"></VideoContent>
  </div>
</template>

<script>
import VideoContent from "~/components/content/VideoContent.vue";
export default {
  layout: "dialog",
  components: {
    VideoContent
  },
  data() {
    return {
      currentComponent: VideoContent,
      parentData: [
        {
          chapter: "Professor",
          scene: 1,
          currentText:
            "Siehst du den glitzernden Stein, der als Turmspitze benutzt wird? Genau diese" +
            "Kristallscherben suchen wir!  ",
          img: "ensinger",
          video: "Aicher"
        },
        {
          chapter: "Professor",
          scene: 2,
          currentText:
            "Versuche den Stein zurück zu bekommen, " +
            "damit wir die Zeitmaschine reparieren können und hilf den Personen, " +
            "um sie wieder in ihre Zeit zurück zu schicken. ",
          img: "schneider",
          video: "Schneider"
        }
      ]
    };
  }
};
</script>

<style></style>
