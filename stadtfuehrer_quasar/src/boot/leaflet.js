// import something here
import { Icon } from 'leaflet'
// this part resolve an issue where the markers would not appear
delete Icon.Default.prototype._getIconUrl

Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})
// "async" is optional
// export default async ({ /* app, router, Vue, ... */ }) => {
//   // something to do
// }
