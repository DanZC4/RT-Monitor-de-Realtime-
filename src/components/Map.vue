<template>
  <div class="" >
    <div class="transform duration-300 h-600px lg:h-1000px 1.5xl:h-full" :class="{'w-1200px 1.5xl:w-1000px': barOn, 'w-616px' : barOff}">
      <myMap  :zoom="zoom" :center="center">
        <l-tile-layer :url="url" :attribution="attribution" ></l-tile-layer>
          {{danger()}}
        <l-polygon v-for="polygon in polygons" :key="polygon.id" :lat-lngs="polygon.latlngs" :fillColor="fillColor" :fillOpacity="fillOpacity" color="none">
           <l-popup>Sector : 123456789</l-popup>
        </l-polygon>

      </myMap>
    </div>
  </div>
</template>

<script>

export default {
  components: {
    "myMap": window.Vue2Leaflet.LMap,
    "l-tile-layer": window.Vue2Leaflet.LTileLayer,
    "l-polygon" : window.Vue2Leaflet.LPolygon,
    "l-popup" : window.Vue2Leaflet.LPopup,

  },
   props:{
     barOn: Boolean,
    barOff:Boolean
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution: '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 15,
      center: [19.433, -99.11],
      
      polygons: [
        {
        latlngs: [[19.4333, -99.111],[19.4343, -99.111], [19.4343, -99.112], [19.4333, -99.112], [19.4333, -99.111]],
      },
              {
        latlngs: [[19.4323, -99.101],[19.4333, -99.101], [19.4333, -99.102], [19.4323, -99.102], [19.4323, -99.101]]
      },
       {
        latlngs: [[19.4322, -99.100],[19.4332, -99.100], [19.4332, -99.101], [19.4322, -99.101], [19.4322, -99.100]]
      },
      {
        latlngs: [[19.4321, -99.099],[19.4331, -99.099], [19.4331, -99.100], [19.4321, -99.100], [19.4321, -99.099]]
      },
           {
        latlngs: [[19.4320, -99.098],[19.4330, -99.098], [19.4330, -99.099], [19.4320, -99.099], [19.4320, -99.098]]
      },
      ],
      sector :  3 ,
      fillColor: '',
      fillOpacity: 0.6,
};
  },
  methods:{
    danger(){
      if (this.sector == 1) {
          this.fillColor = 'yellow'      
      } else if (this.sector == 2){
           this.fillColor = 'orange'     
      }else{
          this.fillColor = 'red'     
      }
    }
  }

};
</script>

<style>

</style>

