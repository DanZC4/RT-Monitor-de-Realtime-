<template>
  <div class=" block 3xl:hidden -mt-12 min-w-2xl w-96 text-bone-100 duration-200" :class="{'hidden': barOn, 'block' : barOff}">
    <div class=" bg-azul-marino-100  h-full ">
      <div class="w-full flex justify-center">
        <div class="text-2xl">
        <button class="px-5 py-2">
           Padre nuestro
            
        </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
   props:{
     barOn: Boolean,
    barOff:Boolean
  }
};
</script>