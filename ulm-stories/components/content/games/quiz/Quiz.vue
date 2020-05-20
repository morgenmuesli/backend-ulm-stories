<template>
  <div class="Quiz">
    <div v-if="isQuizStarted">
      <h1>
        Quiz
      </h1>

      <h4>
        {{ Question }}
      </h4>
      <div id="container">
        <button @click="selectedAnswer(answer_one)" class="answer">
          {{ answer_one }}
        </button>
        <button @click="selectedAnswer(answer_two)" class="answer">
          {{ answer_two }}
        </button>
        <button @click="selectedAnswer(answer_three)" class="answer">
          {{ answer_three }}
        </button>
      </div>
    </div>

    <div v-if="!isQuizStarted">
      <h1>
        Quiz
      </h1>

      <button @click="startQuiz" class="start">
        Start
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Quiz",
  data() {
    return {
      isQuizStarted: false,
      Question: null,
      answer_one: null,
      answer_two: null,
      answer_three: null,
      expectedAnswer: null,
      question_two: false
    };
  },
  methods: {
    startQuiz() {
      this.isQuizStarted = true;
      this.Question = "Wie hoch ist das Ulmer Münster?";
      this.answer_one = 16;
      this.answer_two = 161;
      this.answer_three = 600;
      this.expectedAnswer = 161;
    },

    selectedAnswer(answerSelected) {
      if (answerSelected === this.expectedAnswer) {
        alert("Richtig!");
        if (this.question_two === false) {
          this.question_two = true;
          this.startQuiz_two();
        } else {
          alert("Gratulation du hast alle Fragen richtig beantwortet!");
        }
      } else {
        alert("Falsche Antwort! Versuche es erneut!");
      }
    },

    startQuiz_two() {
      this.Question = "Wie viele Treppen hat das Ulmer Münster?";
      this.answer_one = 76;
      this.answer_two = 768;
      this.answer_three = 8000;
      this.expectedAnswer = 768;
    }
  }
};
</script>

<style lang="scss">
.Quiz {
  /*background-image: url("../../../assets/img/quiz/um.jpeg");*/
  background-image: url("../../../assets/img/background/ensinger.jpg");
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-repeat: no-repeat;
}

h1 {
  font-family: "Ubuntu", sans-serif;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  line-height: 15vh;
}

h4 {
  font-family: "Ubuntu", sans-serif;
  font-weight: bold;
  text-align: center;
  line-height: 50vh;
}

button {
  font-family: "Ubuntu", sans-serif;
  font-weight: bold;
  font-size: 16px;
  width: 300px;
  height: 60px;
  color: black;
  background-color: whitesmoke;
  display: inline-block;
  border-radius: 3px;
}

#container {
  display: block;
  margin-top: 7%;
}

.answer {
  display: block;
  margin: auto auto 10px;
}

.start {
  display: block;
  margin: 65% auto;
}
</style>
