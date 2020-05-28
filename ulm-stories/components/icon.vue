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
            :stroke="color"
            fill="none"
            stroke-width="8"
            stroke-miterlimit="10"
            points="150.001,81.259 40.709,117.04
		110.285,174.656 206.073,100.554 136.863,196.666 206.726,254.523 233.008,150 259.291,45.477 	"
          />
        </g>
      </svg>
    </template>
    <template v-else-if="name === 'inventory'">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 400 400"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xml:space="preserve"
        xmlns:serif="http://www.serif.com/"
        style="fill-rule:evenodd;clip-rule:evenodd;stroke-miterlimit:10;"
      >
        <g id="Ebene_2" :style="{ stroke: color }">
          <path
            d="M325,310C325,332 307,350 285,350L115,350C93,350 75,332 75,310L75,90C75,68 93,50 115,50L285,50C307,50 325,68 325,90L325,310Z"
            style="fill:none;fill-rule:nonzero;stroke-width:10px;"
          />
          <path
            d="M290,296C290,307 281,316 270,316L130,316C119,316 110,307 110,296L110,235C110,224 119,215 130,215L270,215C281,215 290,224 290,235L290,296Z"
            style="fill:none;fill-rule:nonzero;stroke-width:8px;"
          />
          <path
            d="M110,251L290,251"
            style="fill:none;fill-rule:nonzero;stroke-width:8px;"
          />
          <path
            d="M325,94C325,117.65 302.5,137 275,137L125,137C97.5,137 75,117.65 75,94C75,70.35 97.5,51 125,51L275,51C302.5,51 325,70.35 325,94Z"
            style="fill:none;fill-rule:nonzero;stroke-width:10px;"
          />
          <rect
            x="143.5"
            y="50.5"
            width="13"
            height="136"
            style="fill:none;stroke-width:5px;"
          />
          <rect
            x="243.5"
            y="50.5"
            width="13"
            height="136"
            style="fill:none;stroke-width:5px;"
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
