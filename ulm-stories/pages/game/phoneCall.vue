<template>
  <div>
    <section class="header">
      <nuxt-link to="/game">Zurück</nuxt-link>
      <div class="container prof">
        <figure class="image is-64x64">
          <img
            class="is-rounded"
            src="../../assets/img/chatIcon/zweistein.jpg"
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
            class="column is-four-fifths"
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
          <div class="column is-three-quarters-mobile">
            <input
              v-model="input"
              @keyup.enter="send"
              class="input"
              placeholder="Text input"
              type="text"
              v-model="input"
              @keyup.enter="send"
            />
          </div>
          <div class="column is-mobile">
<!--            <button @click="send" class="button is-rounded">-->
<!--              <svg-->
<!--                version="1.1"-->
<!--                class="sendbtn"-->
<!--                src="../../assets/img/chatIcon/send_icon.svg"-->
<!--                height="64"-->
<!--                width="64"-->
<!--              />-->
<!--            </button>-->
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
h3 {
  color: white;
  display: flex;
  align-content: center;
  font-size: larger;
}

.prof {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10vh;
}

.main {
  height: 100vh;
  max-height: 100vh;
  max-width: 100%;
}

.chatRoom {
}

.card {
  box-sizing: border-box;
  border-radius: 0.1em 1.5em 0.5em 3em;
  padding-left: 3em;
  max-width: 100%;
}

.container {
  margin: 1em;
}

.header {
  position: static;
  top: 0;
  background-color: darkslateblue;
  width: 100%;
  display: flex;
}

.writingWindow {
  width: 100%;
  height: 10vh;
  background-color: gray;
  position: fixed;
  bottom: 0;
  padding-right: 2rem;
}
#send {
  max-width: 100%;
  margin-right: 2rem;
}
</style>
