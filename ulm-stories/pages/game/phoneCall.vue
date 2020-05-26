<template>
  <div>
    <section class="header">
      <nuxt-link to="/game">
        <img
          src="../../assets/img/icons/svg/blackandwhite/back.svg"
          alt="return to map"
          height="48"
          width="48"
          class="back-btn"
        />
      </nuxt-link>
      <div class="container prof is-fixed-top">
        <figure class="image is-64x64">
          <img
            class="is-rounded"
            src="../../assets/img/chatIcon/zweistein.jpg"
            alt="prof icon"
          />
        </figure>
        <div class="columns is-mobile">
          <div class="column ">
            <h3 title>Professor Zweistein</h3>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container chatRoom">
        <div
          :key="index"
          v-for="(item, index) in displayMessages"
          class="columns is-mobile "
        >
          <div
            :class="{ 'is-offset-one-fifth': item.isFromMe }"
            class="column is-four-fifths"
          >
            <div class="card">
              <div class="content">
                <video
                  v-if="item.video"
                  :src="require('@/assets/webm/' + item.video + '.webm')"
                  @ended="popMessages"
                  autoplay
                ></video>
                <p>{{ item.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer class="writingWindow">
      <div id="sendContainer" class="container">
        <div class="columns is-center is-mobile">
          <div
            class="column is-three-quarters-mobile"
            style="margin-top: 2vh; padding-left: 5%"
          >
            <input
              v-model="input"
              @keyup.enter="send"
              class="input"
              placeholder="Text input"
              type="text"
            />
          </div>
          <div class="column is-mobile" style="margin-top: 2vh">
            <button id="send" @click="send" class="button is-rounded">
              Send
            </button>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  name: "PhoneCall",
  middleware: "profcall",
  data: () => ({
    displayMessages: [],
    currentMessages: [],
    waitForAnswerMessage: null,
    input: "Schreib etwas"
  }),
  mounted() {
    this.currentMessages = this.$store.getters.getProfVideos;
    this.popMessages();
  },
  methods: {
    send() {
      this.displayMessages.push({ text: this.input, isFromMe: true });
      if (this.waitForAnswerMessage) {
        setTimeout(
          () => this.displayMessages.push(this.waitForAnswerMessage),
          2000
        );
        this.waitForAnswerMessage = null;
      }
      this.input = "";
    },
    popMessages() {
      /**
       *  pop messages and displays them. If there is an Answer it stores the message in a helper and waits for the user to answer.
       *  If the user didn't answer the message will appear automatic after 10 Seconds
       */
      const nextMessage = this.currentMessages.pop();
      if (nextMessage) {
        if (_.has(nextMessage, "answer")) {
          this.input = nextMessage.answer;
          this.waitForAnswerMessage = nextMessage;
          this.autoSend();
        } else {
          this.displayMessages.push(nextMessage);
        }
      }
    },
    // eslint-disable-next-line require-await
    async autoSend() {
      return new Promise(resolve => {
        setTimeout(() => {
          if (this.waitForAnswerMessage) {
            this.displayMessages.push({
              text: this.waitForAnswerMessage.answer,
              isFromMe: true
            });
            this.displayMessages.push(this.waitForAnswerMessage);
          }
        }, 15000);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
body {
  overflow: hidden;
  height: 100vh;
  width: 100vw;
}
h3 {
  color: white;
  display: flex;
  align-content: center;
  font-size: larger;
  font-family: Ubuntu, sans-serif;
}

.prof {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10vh;
  padding: 1rem;
}

.main {
  height: 100vh;
  max-height: 100vh;
  max-width: 100%;
}

.chatRoom {
  width: 100vw;
  height: 90vh;
  background: url("../../assets/img/background/ensinger.jpg") fixed;
  background-size: cover;
  overflow: auto;
  padding-top: 125px;
}

.card {
  box-sizing: border-box;
  border-radius: 0.1em 1.5em 0.5em 3em;
  padding-left: 15%;
  padding-bottom: 10%;
  max-width: 100%;
  margin: 1rem;
}

.content {
}

.header {
  position: fixed;
  top: 0;
  background-color: #272727;
  opacity: 0.95;
  width: 100%;
  height: 125px;
  display: flex;
  z-index: 1;
}

.writingWindow {
  width: 100%;
  height: 10vh;
  background-color: #272727;
  position: fixed;
  bottom: 0;
  padding-right: 2rem;
}

.back-btn {
  fill: #ff0000;
}

#send {
  max-width: 100%;
  margin-right: 2rem;
}
</style>
