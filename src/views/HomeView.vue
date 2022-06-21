<script setup>
import Exercises from '../components/Exercises.vue';
</script>

<template>
  <main>
    <div class="md:flex md:justify-around px-10 md:items-center block">
    <div class="md:w-[500px] w-[270px] h-[250px] md:mt-0 mt-5">
    <div>
       <h4 class="font-bold md:text-5xl text-3xl md:leading-[60px] tracking-wide ">Time for your <span class="text-purple-500">body</span> and <span class="text-purple-500">mind</span></h4>  
     </div>
      <div class="mt-5 md:mt-2 md:leading-2 md:ml-0">
        <p class="font-bold md:text-lg text-gray-600">You want to lose weight, build muscle or shape your body? We have the right exercises for you!</p>
      </div>

      <div class="xl:mt-7 my-5">
      <a href="#exercises" v-smooth-scroll>
          <button class="py-3 px-4 font-bold bg-black hover:bg-purple-700 duration-200 ease-in text-white rounded-md">Get Started</button>
      </a>
      </div>
      </div>
      <div class="ml-4 xl:ml-0">
        <img src="../assets/coach-img.jpg" alt="Coach" class="xl:w-full w-96 h-[450px] mt-5">
      </div>
      </div>
      <Exercises/>
  </main>
</template>
