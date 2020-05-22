<template>
  <div>
    <section class="header">
      <div class="container">
        <div class="columns is-mobile">
          <div class="column ">
            <h3 title>Professor Zweistein</h3>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div
          :key="index"
          class="columns is-mobile "
          v-for="(item, index) in messages"
        >
          <div class="column is-four-fifths">
            <div class="card">
              <div class="content">
                <p>{{ item }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer class="writingWindow">
      <div class="container">
        <div class="columns is-center is-mobile">
          <div class="column is-three-quarters-mobile">
            <input
              class="input"
              placeholder="Text input"
              type="text"
              v-model="input"
            />
          </div>
          <div class="column is-mobile">
            <button class="button is-rounded">Send</button>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "PhoneCall",
  data: () => ({
    messages: [
      "blubbber",
      "fubar",
      "blabla",
      "nana",
      "dada",
      "upsala",
      "penner"
    ],
    input: "peter"
  })
};
</script>

<style lang="sass" scoped>


h3
  color: white

.main
  height: 100vh
  max-height: 100vh
  max-width: 100%

.chatRoom
  overflow-y: scroll
  max-width: 100%

.card
  box-sizing: border-box
  border-radius: 0.1em 1.5em 0.5em 3em
  padding-left: 3em

.container
  margin: 1em

.header
  position: static
  top: 0
  background-color: darkslateblue
  width: 100%
  display: flex


.writingWindow

  width: 100%
  height: 10vh
  background-color: gray
  position: fixed
  bottom: 0
</style>
