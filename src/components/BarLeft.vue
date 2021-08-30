<template>
  <div class=" hidden sm:block 3xl:hidden -mt-12  w-16  ">
    <div class="1.5xl:rounded-bl-lg  bg-azul-marino-100  h-full ">
      <div class="w-full flex justify-center">
        <div class="text-2xl" :class="{'block': barOn, 'hidden' : barOff}">
        <button class="px-5 py-2" @click="barmenu()">
            <i class="fas fa-bars"></i>
          
        </button>
        </div>
         <div class="text-2xl " :class="{'hidden': barOn, 'block' : barOff}">
        <button class="px-5 py-2" @click="barmenu()">
       
            <i class="fas fa-times "></i>
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
    barOff:Boolean,
    barmenu:Function
  }
};
</script>