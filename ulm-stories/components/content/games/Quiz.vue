<template>
  <div class="quiz">
    <div
      v-for="(element, index) in questions.slice(a, b)"
      :key="index"
      class="questions"
    >
      <h4>{{ element.question }}</h4>
      <div class="answers">
        <button
          v-for="(item, index) in element.answers"
          :key="index"
          :class="select ? check(item) : ''"
          @click="selectResponse"
        >
          {{ item.answer }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Quiz",
  data() {
    return {
      questions: [
        {
          question: "Wie hoch ist das Ulmer Münster?",
          answers: [
            { answer: "16" },
            { answer: "161", correct: true },
            { answer: "600" }
          ]
        },
        {
          question: "Wie viele Treppen hat das Ulmer Münster?",
          answers: [
            { answer: "76" },
            { answer: "768", correct: true },
            { answer: "8000" }
          ]
        }
      ],
      a: 0,
      b: 1,
      select: false
    };
  },
  methods: {
    check(status) {
      if (status.correct) {
        return "correct";
      } else {
        return "incorrect";
      }
    },
    selectResponse() {
      this.select = true;
      setTimeout(() => this.nextQuestion(), 3000);
    },
    nextQuestion() {
      this.a++;
      this.b++;
      this.select = false;

      if (this.a === 2) {
        alert("Alle Fragen beantwortet!");
      }
    }
  }
};
</script>

<style lang="scss">
* {
  font-family: "Ubuntu", sans-serif;
}
.quiz {
  background-image: url("../../../assets/img/background/ensinger.jpg");
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-repeat: no-repeat;
}
h4 {
  font-weight: bolder;
  color: black;
  text-align: center;
  line-height: 60vh;
}
.answers {
  text-align: center;
}
button {
  font-size: 16px;
  font-weight: bold;
  width: 300px;
  height: 60px;
  color: black;
  background-color: whitesmoke;
  margin-bottom: 10px;
  border-radius: 3px;
}
/* I present FUN with COLORS */
button.correct {
  border: 2px solid darkgreen;
  background-color: lightgreen;
}

button.incorrect {
  border: 2px solid darkred;
  background-color: indianred;
}
</style>
