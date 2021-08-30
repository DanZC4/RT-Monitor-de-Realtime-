<template>
  <div id="app">
    <div class="bg-gris md:px-12 lg:px-24 md:py-12 text-gray-100 flex justify-center">
      <div
        class="
          overflow-hidden
          bg-gray-100
          w-full
          max-w-10xl
          3xl:max-w-12xl
          rounded-lg
        "
      >
        <Nav />
        <div class="flex">
          <ControlLeft />
          <BarLeft :barmenu="barmenu" :barOn="barOn" :barOff="barOff" />
          <MenuLeft :barOn="barOn" :barOff="barOff" />
          <Map :barOn="barOn" :barOff="barOff" />
          <ControlRigth/>
        </div>
         <ControlBottom />
      </div>
    </div>
  </div>
</template>

<script>
import Map from "./components/Map.vue";
import ControlLeft from "./components/ControlLeft.vue";
import ControlRigth from "./components/ControlRigth.vue";
import BarLeft from "./components/BarLeft.vue";

import MenuLeft from "./components/MenuLeft.vue";
import Nav from "./components/Nav.vue";
import ControlBottom from "./components/ControlBottom.vue";

export default {
  components: {
    Map,
    Nav,
    ControlLeft,
    ControlRigth,
    BarLeft,
    MenuLeft,
    ControlBottom
  },
  data() {
    return {
      barOn: true,
      barOff: false,
      window: {
        width: 0,
        height: 0,
      },
    };
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      if (window.innerWidth >= 1780) {
(this.barOn = true), (this.barOff = false);
      } 
    
    },
    barmenu() {
      if (this.barOn == true && this.barOff == false) {
        (this.barOn = false), (this.barOff = true);
      } else {
        (this.barOn = true), (this.barOff = false);
      }
    },
  },
};
</script>

<style>
</style>
