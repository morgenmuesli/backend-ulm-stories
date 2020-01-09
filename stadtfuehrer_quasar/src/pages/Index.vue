<template>
  <q-page class="absolute-center map">
    <Map/>
  </q-page>
</template>

<script>
import Map from '../components/Map'
export default {
  name: 'PageIndex',
  components: { Map }
}
</script>
<style lang="sass" scoped>
  .map
      width: 100em
      height: 100em
</style>
