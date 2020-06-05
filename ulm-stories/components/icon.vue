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
    <template v-else-if="name === 'newMessage'">
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
        <g>
          <path
            :style="{ stroke: color }"
            d="M254,131L254,220C254,233.75 242.721,245 228.971,245L32.983,245C19.233,245 8,233.75 8,220L8,120.275C8,106.525 19.233,95 32.983,95L218,95"
            style="fill:none;fill-rule:nonzero;stroke-width:10px;"
          />
          <path
            :style="{ stroke: color }"
            d="M7,136.552L131.96,170.138"
            style="fill:none;fill-rule:nonzero;stroke-width:9px;"
          />
          <path
            :style="{ stroke: color }"
            d="M254.952,136.718L129.992,170.138"
            style="fill:none;fill-rule:nonzero;stroke-width:9px;"
          />
          <path
            style="fill: indianred"
            d="M259.804,105L247.153,105L243.145,67L263.807,67L259.804,105Z"
          />
          <ellipse
            cx="253.314"
            cy="95.259"
            rx="39.686"
            ry="40.259"
            style="fill:none;stroke-width:9px;stroke: indianred"
          />
          <rect
            style="fill: indianred"
            x="247"
            y="110"
            width="13"
            height="13"
          />
        </g>
      </svg>
    </template>
    <template v-else-if="name === 'message'">
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
        <g :style="{ stroke: color }">
          <path
            d="M252,116L263.5,116C269.825,116 275,122.05 275,129.75L275,236.75C275,244.45 268.7,251 261,251L39,251C31.3,251 25,244.45 25,236.75L25,129.75C25,122.05 29.95,116 36,116L47,116"
            style="fill:none;fill-rule:nonzero;stroke-width:10px;"
          />
          <path
            d="M252,157L252,74.25C252,60.5 241.25,49 227.5,49L72.5,49C58.75,49 47,60.5 47,74.25L47,156"
            style="fill:none;fill-rule:nonzero;stroke-width:10px;"
          />
          <path
            d="M276,149.769L149,183.25"
            style="fill:none;fill-rule:nonzero;stroke-width:9px;"
          />
          <path
            d="M24,149.603L151,183.25"
            style="fill:none;fill-rule:nonzero;stroke-width:9px;"
          />
          <path
            d="M220,122C220,123.65 218.2,125 216,125L84,125C81.8,125 80,123.65 80,122C80,120.35 81.8,119 84,119L216,119C218.2,119 220,120.35 220,122Z"
            style="fill-rule:nonzero;"
          />
          <path
            d="M220,122C220,123.65 218.2,125 216,125L84,125C81.8,125 80,123.65 80,122C80,120.35 81.8,119 84,119L216,119C218.2,119 220,120.35 220,122Z"
            style="fill:none;fill-rule:nonzero;stroke-width:4px;"
          />
          <path
            d="M220,86C220,87.65 218.2,89 216,89L84,89C81.8,89 80,87.65 80,86C80,84.35 81.8,83 84,83L216,83C218.2,83 220,84.35 220,86Z"
            style="fill-rule:nonzero;"
          />
          <path
            d="M220,86C220,87.65 218.2,89 216,89L84,89C81.8,89 80,87.65 80,86C80,84.35 81.8,83 84,83L216,83C218.2,83 220,84.35 220,86Z"
            style="fill:none;fill-rule:nonzero;stroke-width:4px;"
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
