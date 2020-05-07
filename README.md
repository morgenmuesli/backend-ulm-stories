# Stadtführer Ulm

## Animation Characters

OneDrive Link: https://1drv.ms/u/s!AgA0R-C1HSwtlghQzgGuUnjc3iIf?e=KrpRpM

## Project directories

- app root: ./ulm-stories/

## Project setup (NodeJS)

```bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# build on android
# please make sure you set the android path correctly ;)
$ npm run cordova
```

## used technology

Hier stehen alle verwendeten Programmemit den URLs zu der jeweiligen Seite. Keine Ahnung warum ich alles in englisch geschrieben hab.
Sollte die Documentation nicht ausreichen und ihr ein gutes Tutorial findet bitte dies in der Sectr

| **name and url**                                                                      | **type**                     | **description**                                                                                                                         |
| ------------------------------------------------------------------------------------- | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| [node](https://nodejs.org/en/)                                                        | runtime environment          | runtime environment for javascript                                                                                                      |
| [npm](https://www.npmjs.com/)                                                         | packet manager               | nodejs packet manager for downloading and installing libraries -> comes with nodejs                                                     |
| [vuejs](https://vuejs.org/)                                                           | javascript framework         | javascript framework fpr creating websites                                                                                              |
| [vuex](https://vuex.vuejs.org/)                                                       | vuejs library                | state manager for vuejs                                                                                                                 |
| [nuxt](https://nuxtjs.org/)                                                           | vuejs framework              | Projekt framework fpr vuejs, which automated a lot by itself (like generating routing files and so on) PLEASE READ THE DOCUMENTATION!!! |
| [leaflet-vue](https://github.com/vue-leaflet/Vue2Leaflet)                             | map library                  | opensource map library with vue wrapper                                                                                                 |
| [cordova](https://cordova.apache.org/)                                                | nodejs wrapper               | Is used to run webcam on mobile devices. also provides to use mobile core features like GPS and camera                                  |
| [bulma](https://bulma.io/)                                                            | css framework                | small and easy css framework for layout                                                                                                 |
| [vuex-geolocation](https://pulilab.github.io/vuex-geolocation/#/?id=vuex-geolocation) | vuex wrapper for geolocation | creates a stroe with the current geolocation and updates it                                                                             |

## youtube tutorials

Hier sind einfach ein paar gute Tutorials enthalten. Die meisten sind eher lang (>1h) und man kann sich auch getrost einfach den part anschauen der für einen relevant ist.
Allerdings wäre es ein zu großer Aufwand hier auch noch Zeitpunkte einzutragen...

| **topic**        | **url**                                                                                           | **short description**                                                                                                                                                                                                                                                                                                                               |
| ---------------- | ------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| nuxt and vuejs   | [Nuxt JS Crash Course](https://www.youtube.com/watch?v=ltzlhAxJr74)                               | In this video we will look at Vue.js server side rendering with Nuxt.js. We will build a dadjokes app. This requires at least minimal Vue.js experience.                                                                                                                                                                                            |
| vuejs and vuex   | [Learn Vue.js - Full Course for Beginners - 2019](https://www.youtube.com/watch?v=4deVCNJq3qc)    | complete course for vue and vuex in 3h                                                                                                                                                                                                                                                                                                              |
| nuxt and cordova | [Vue.js, Cordova Containers With NuxtJS, April 2019](https://www.youtube.com/watch?v=nWKLGyWStUA) | einrichten von nuxt und wie man cordova plugins verwendet. zusätzlich sinnvoll: [presentation](https://docs.google.com/presentation/d/1bvT9ZKt_zDHqWJfMeNbpphQuY2hgMELHByTigxRG90o/edit?fbclid=IwAR2uRrc_s4dDge7ukQgWn65SHEumPB6bU2WjNCZ0zMOFQLM_eEyr9rZHHsU#slide=id.g5683107f14_0_332) [github repo](https://github.com/hokify/cordova-nuxt-demo) |

## lesson learned

Hier bitte Fehler welche ihr gemacht habt und gelöst bzw. daraus gelernt habt eintragen, dass alle von dem Wissen profitieren können.

| **topic**              | **description**                                                                                         | **solution**                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---------------------- | ------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| prettier & filewatcher | prettier und eslint bereiten einige Kopfschmerzen da man nicht immer den code richtig formatiert        | in webstorm [filewatcher](https://prettier.io/docs/en/webstorm.html) konfigurieren, dann wird der Code bei jedem speichern automatisch richtig formatiert 🥳                                                                                                                                                                                                                                                    |
| getters in stores      | zugriff auf getters von unterstores (bsw. currentLocation -> location)                                  | wichtig es wird immer erst der standart "index" store geladen und dann die verschiedenen modules. wenn ihr nen getter von einem Module nutzen wollt so müsst ihr das Module bei mapGetters mit angeben (siehe bsw. LeafletMap.vue oder beschrieben in dieser Stackoverflow frage: [stackoverflow](https://stackoverflow.com/questions/57074134/understanding-state-and-getters-in-nuxt-js-getters-wont-working) |
| page navigation        | normale hrefs funktionieren innerhalb der Seite nicht immer da man mit dem Router neue Pfade definiert. | nuxt bietet den Componenten [nuxt-link](https://nuxtjs.org/api/components-nuxt-link#the-lt-nuxt-link-gt-component) bei welchen man die weiterführende Seite angibt. Sollte man kein nuxt-link verwenden wollen (zum beispiel da man einen Link in einer Methode verwenden will) so nutzt man [this.\$router.push](https://router.vuejs.org/guide/essentials/navigation.html)                                    |

# in case of 🔥

- ✔ git commit
- ↑️ git push
- 💨 exit building

## nutzt git zum speichern und versionieren

Auch wenn ihr bei n paar Zeilen Code euch nicht sicher seit oder ihr sie hässlic findet.
Macht euch einfach einen eigenen Branch:

```bash
git branch <branchname>
git checkout <branchname>
```

danach könnt ihr auf diesem commiten pushen wie ihr wollt.
Solltet ihr dann mit allem zufrieden sein merged ihr diesen.
Einfach den Branch zum developer Branch wechseln und dann in Webstorm VCS &rightarrow; Git &rightarrow; Merge Changes.
Solltet ihr dann irgendwann wieder einen eigenen Branch brauchen einfach wieder zu eurem Branch wechseln den developer branch mergen und wieder herum experimentieren.
Macht nicht den fehler wie ich und commited nur sporadisch. mit git ist es deutlich einfacher wieder funktionierende Zustände wieder herzustellen als wenn ihr von Hand sucht was genau ihr verändert habt.
Einfach am Boden eurer IDE unten den Log anschauen und rechtsklick auf den passenden commit gehen checkout und fertig 😁
**nutzt git für das was es tun soll!**
