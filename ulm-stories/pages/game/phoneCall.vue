<template>
  <div>
    <section class="header">
      <div class="container">
        <div class="columns is-mobile">
          <img
            src="@/assets/img/chatIcon/zweistein.jpg"
            alt=""
            class="column is-one-fifths portait"
          />
          <div class="column ">
            <h1>Professor Zweistein</h1>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div
          v-for="(item, index) in messages"
          class="columns is-mobile "
          :key="index"
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
      <div class="container center"></div>
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
    ]
  })
};
</script>

<style lang="sass" scoped>

h1
  text-align: center
  font-size: 1.5rem
img
  max-height: 100%
.portait
  max-height: 100%

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
  max-height: 10vh
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
