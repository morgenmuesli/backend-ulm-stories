# Stadtführer Ulm

## Project setup (NodeJS)
```
npm install
npm run dev
```

## used technology

Hier stehen alle verwendeten Programmemit den URLs zu der jeweiligen Seite. Keine Ahnung warum ich alles in englisch geschrieben hab.
Sollte die Documentation nicht ausreichen und ihr ein gutes Tutorial findet bitte dies in der Sectr

**name and url** | **type** | **description** 
-------- | -------- | --------
[node](https://nodejs.org/en/)   | runtime environment   |  runtime environment for javascript 
[npm](https://www.npmjs.com/)   | packet manager   |  nodejs packet manager for downloading and installing libraries -> comes with nodejs
[vuejs](https://vuejs.org/) | javascript framework | javascript framework fpr creating websites
[vuex](https://vuex.vuejs.org/) | vuejs library | state manager for vuejs
[nuxt](https://nuxtjs.org/) | vuejs framework   | Projekt framework fpr vuejs, which automated a lot by itself (like generating routing files and so on) PLEASE READ THE DOCUMENTATION!!!
[leaflet-vue](https://github.com/vue-leaflet/Vue2Leaflet) | map library | opensource map library with vue wrapper
[cordova](https://cordova.apache.org/) | nodejs wrapper | Is used to run webcam on mobile devices. also provides to use mobile core features like GPS and camera
[bulma](https://bulma.io/) | css framework | small and easy css framework for layout




## youtube tutorials

Hier sind einfach ein paar gute Tutorials enthalten. Die meisten sind eher lang (>1h) und man kann sich auch getrost einfach den part anschauen der für einen relevant ist.
Allerdings wäre es ein zu großer Aufwand hier auch noch Zeitpunkte einzutragen...

**topic** | **url** | **short description**
--------- | ------- | ---------------------
nuxt and vuejs | [Nuxt JS Crash Course](https://www.youtube.com/watch?v=ltzlhAxJr74) | In this video we will look at Vue.js server side rendering with Nuxt.js. We will build a dadjokes app. This requires at least minimal Vue.js experience.
vuejs and vuex | [Learn Vue.js - Full Course for Beginners - 2019](https://www.youtube.com/watch?v=4deVCNJq3qc) | complete course for vue and vuex in 3h
nuxt and cordova | [Vue.js, Cordova Containers With NuxtJS, April 2019](https://www.youtube.com/watch?v=nWKLGyWStUA) | einrichten von nuxt und wie man cordova plugins verwendet. zusätzlich sinnvoll: [presentation](https://docs.google.com/presentation/d/1bvT9ZKt_zDHqWJfMeNbpphQuY2hgMELHByTigxRG90o/edit?fbclid=IwAR2uRrc_s4dDge7ukQgWn65SHEumPB6bU2WjNCZ0zMOFQLM_eEyr9rZHHsU#slide=id.g5683107f14_0_332) [github repo](https://github.com/hokify/cordova-nuxt-demo)

## lesson learned

Hier bitte Fehler welche ihr gemacht habt und gelöst bzw. daraus gelernt habt eintragen, dass alle von dem Wissen profitieren können.

**topic** | **description** | **solution**
--------- | --------------- | ------------
prettier & filewatcher | prettier und eslint bereiten einige Kopfschmerzen da man nicht immer den code richtig formatiert | in webstorm [filewatcher](https://prettier.io/docs/en/webstorm.html) konfigurieren, dann wird der Code bei jedem speichern automatisch richtig formatiert 🥳
getters in stores | zugriff auf getters von unterstores (bsw. currentLocation -> location) | wichtig es wird immer erst der standart "index" store geladen und dann die verschiedenen modules. wenn ihr nen getter von einem Module nutzen wollt so müsst ihr das Module bei mapGetters mit angeben (siehe bsw. LeafletMap.vue oder beschrieben in dieser Stackoverflow frage: [stackoverflow](https://stackoverflow.com/questions/57074134/understanding-state-and-getters-in-nuxt-js-getters-wont-working)
