<template>
  <div class="map-container" id="map-container"></div>
</template>
<script>
// 引入leaflet模块
import "leaflet/dist/leaflet.css";
import L from "leaflet";
export default {
  name: "mapView",
  components: {},
  data() {
    return {
      map: null,
      GaodeUrl: "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
      WMTSUrl : "http://localhost:8080/geoserver/mzr/wms?",
      WMSOption : {
        layers: '满洲里市',
        format: 'image/png',
        transparent: true,
        
      }
    };
  },
  mounted() {
    this.map = L.map("map-container");
    L.tileLayer(this.GaodeUrl, {
      maxZoom: 24,
    }).addTo(this.map);
    this.map.setView([49.58272, 117.47946], 12);
    // 加载geoserver发布的wmts服务
    L.tileLayer.wms(this.WMTSUrl,this.WMSOption).addTo(this.map);
  }
};
</script>
<style>
.map-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>
