<template>
  <div>
    <div class="Quiz" v-if="isQuizStarted">
      <h1>
        Quiz
      </h1>

      <h4>
        {{ Question }}
      </h4>
      <div id="container">
        <button class="answer" @click="selectedAnswer(answer_one)">
          {{ answer_one }}
        </button>
        <button class="answer" @click="selectedAnswer(answer_two)">
          {{ answer_two }}
        </button>
        <button class="answer" @click="selectedAnswer(answer_three)">
          {{ answer_three }}
        </button>
      </div>
    </div>

    <div v-if="!isQuizStarted">
      <h1>
        Quiz
      </h1>

      <button class="start" @click="startQuiz">
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

<style>
.Quiz {
  background-image: url("../../assets/img/quiz/um.jpeg");
  background-position: center;
  background-size: 120% 100%;
}

h1 {
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  line-height: 15vh;
}

h4 {
  font-weight: bold;
  text-align: center;
  line-height: 50vh;
}

button {
  padding: 10px;
  width: 300px;
  height: 60px;
  margin-right: 10px;
  margin-bottom: 10px;
  color: black;
  background-color: lightskyblue;
  font-size: 24px;
  vertical-align: center;
  horiz-align: center;
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
  margin: 55% auto;
}
</style>
