<template>
  <div>
    <section class="header container">
      <nuxt-link to="/game">
        <icon
          name="back"
          style="width: 48px; height: 48px"
          class="is-one-fifth"
        />
      </nuxt-link>
      <div class="prof is-fixed-top is-half is-offset-one-fifth">
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
                <div class="img-video">
                  <img
                    v-if="item.img"
                    :src="
                      require('@/assets/img/background/' + item.img + '.jpg')
                    "
                  />
                  <video
                    v-if="item.video"
                    :src="require('@/assets/webm/' + item.video + '.webm')"
                    @ended="popMessages"
                    autoplay
                    style="position: absolute; bottom: 2%; right:0"
                  ></video>
                </div>
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
            class="column is-four-fifths-mobile"
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
          <div
            class="column is-one-quarter"
            style="margin-top: 2vh"
            @click="send"
          >
            <icon
              name="send"
              class="send-btn"
              style="height: 48px; width: 48px; "
            />
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import _ from "lodash";
import Icon from "../../components/icon";
export default {
  name: "PhoneCall",
  components: { Icon },
  middleware: "profcall",
  data: () => ({
    displayMessages: [],
    currentMessages: [],
    waitForAnswerMessage: null,
    input: "Schreib etwas"
  }),
  mounted() {
    this.displayMessages = [
      ...this.$store.getters["profCall/getDisplayedMessages"]
    ];
    this.displayMessages.sort((a, b) => b.scene - a.scene);
    this.currentMessages = [
      ...this.$store.getters["profCall/getNewProfMessages"]
    ];
    this.currentMessages.sort((a, b) => b.scene - a.scene);
    this.$store.dispatch("profCall/clearMessages");

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
  font-family: "Ubuntu", sans-serif;
  font-weight: bold;
  font-size: x-large;
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
  font-family: "Ubuntu", sans-serif;
  font-size: 16px;
  font-weight: bolder;
  padding: 10%;
  max-width: 100%;
  margin-top: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
}

.img-video {
  position: relative;
}

.header {
  position: fixed;
  top: 0;
  background-color: #272727;
  opacity: 0.95;
  width: 100%;
  height: 125px;
  display: flex;
  z-index: 5;
}

.writingWindow {
  width: 100%;
  height: 10vh;
  background-color: #272727;
  position: fixed;
  bottom: 0;
  padding-right: 2rem;
}
</style>
