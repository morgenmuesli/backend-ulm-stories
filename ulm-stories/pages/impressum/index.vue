<template>
  <div class="container">
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Impressum</h1>
          <h2 class="titleTwo">Herausgeber</h2>
          <h3>
            Universität Ulm <br />
            89069 Ulm <br />
            Telefon +49 (0)731/50-10 <br />
            Telefax +49 (0)731/50-22038 <br />
            Umsatzsteueridentifikationsnummer DE173703203 <br />
          </h3>
          <br />
          <div class="logo">
            <img
              src="../../assets/img/logo/logo.png"
              height="150px"
              width="150px"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Index"
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400&display=swap");
.title {
  font-family: "Ubuntu", sans-serif;
  font-size: 30px;
}
.titleTwo {
  font-family: "Ubuntu", sans-serif;
  font-size: 20px;
  font-weight: bold;
}
</style>
