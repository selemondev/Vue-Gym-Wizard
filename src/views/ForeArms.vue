<script setup>
import { exerciseOptions, useFetch } from '../utils/useFetch';
import { ref } from "vue";
import Loader from '../components/Loader.vue';
const foreArmsExercises = ref([]);
const loading = ref(false);
const foreArmsExercise = async () => {
    loading.value = true;
    const foreArmsData = await useFetch("https://exercisedb.p.rapidapi.com/exercises/bodyPart/lower arms", exerciseOptions);
    foreArmsExercises.value = foreArmsData;
    loading.value = false;
}
foreArmsExercise();
function truncate(string, n) {
    return string?.length > n ? string.substring(0, n-1 ) + "....": string;
}
</script>
<template>
<main>
    <div>
    <div class="grid place-items-center mt-4">
        <h1 class="font-bold text-4xl">Exercises</h1>
        <span class="w-20 md:mt-1 rounded-md p-1 bg-purple-700"></span>
    </div>

         <div v-if="loading" class="grid place-items-center mt-40">
         <Loader/>
    </div>
       <div class="flex justify-center items-center flex-wrap" v-else>
        <div v-for="exercise in foreArmsExercises" :key="exercise.id" class="m-5">
                  <router-link :to="{name:'exercise', params:{id: exercise.id}}">
           <img :src="exercise.gifUrl" :alt="`${exercise.name}`" class="w-48 h-48 m-10">
    </router-link>
    <div class="grid place-items-center">
        <h2 class="font-bold md:text-lg">{{truncate(exercise.name,20)}}</h2>
    </div>
        </div>
    </div>
    </div>
</main>
</template>