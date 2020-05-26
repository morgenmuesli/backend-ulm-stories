<template>
  <div>
    <template v-if="name === 'back'">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 300 300"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xml:space="preserve"
        xmlns:serif="http://www.serif.com/"
        style="fill-rule:evenodd;clip-rule:evenodd;stroke-miterlimit:10;"
      >
        <g id="Ebene_2">
          <path
            :stroke="color"
            d="M107,96M107,96M107,96M107,96M107,95L107,96M107,138L107,173.695L27,116.196L107,58.695L107,95M107,137M107,137M107,132M107,124M109.25,92.088C109.25,92.088 363.808,60.166 236.22,242.305M104.309,142.08C104.309,142.08 288.684,121.615 235.913,241.305"
            style="fill:none;fill-rule:nonzero;stroke-width:8px;"
          />
        </g>
      </svg>
    </template>
    <template v-else-if="name === 'send'">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="100%"
        height="100%"
        viewBox="0 0 300 300"
        enable-background="new 0 0 300 300"
        xml:space="preserve"
      >
        <g id="Ebene_2">
          <polygon
            fill="none"
            :stroke="color"
            stroke-width="8"
            stroke-miterlimit="10"
            points="150.001,81.259 40.709,117.04
		110.285,174.656 206.073,100.554 136.863,196.666 206.726,254.523 233.008,150 259.291,45.477 	"
          />
        </g>
      </svg>
    </template>
  </div>
</template>

<script>
export default {
  name: "Icon",
  props: {
    color: {
      type: String,
      default: "white"
    },
    name: String
  }
};
</script>

<style scoped></style>
