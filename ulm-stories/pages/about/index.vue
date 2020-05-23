<template>
  <div class="container">
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Über uns:
          </h1>
          <h2 class="subtitle">
            Hey, wir sind Anastasia, Christoph, Daria, Pascal und Sandra.<br />
          </h2>
          <img src="../../assets/img/avatare.jpg" />
          <h2 class="subtitle">
            <br />
            Wir sind Studierende der Universität Ulm und haben diese App
            entwickelt, mit der sich die Geschichte Ulms und deren
            Persönlichkeiten spielerisch entdecken lassen. <br />
            <br />
            Wusstest du zum Beispiel, dass Deutschlands erste anerkannte Ärztin
            aus Ulm kam? <br />
            <br />
            <b
              >Ein großer Dank geht an unsere tollen Helfer, die uns bei unserem
              Projekt unterstützt haben: <br />
            </b>
            <ul>
              <li>Jennifer (Illustration),</li>
              <li>Jörg & Gabriele (Synchronstimmen) und</li>
              <li>Jens (Dozent)</li>
            </ul>
          </h2>
          <h3 class="subtitle">
            Wir wünschen Dir viel Spaß auf Deiner Entdeckungstour durch Ulm!
          </h3>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "IndexVue"
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400&display=swap");
.title {
  font-family: "Ubuntu", sans-serif;
  font-size: 30px;
}
.subtitle {
  font-family: "Ubuntu", sans-serif;
  font-size: 16px;
}
.list {
  list-style-type: disc;
}
</style>
