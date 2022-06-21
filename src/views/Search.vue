<script setup>
import { ref } from 'vue';
import { useFetch, exerciseOptions } from '../utils/useFetch';
import SearchedExercises from "../components/SearchedExercises.vue";
import Loader from '../components/Loader.vue';
const searchMuscle = ref("");
const searchResults = ref([]);
const loading = ref(false);
const searchedMuscle = async () => {
    loading.value = true;
    const response = await useFetch(`https://exercisedb.p.rapidapi.com/exercises/target/${searchMuscle.value}`, exerciseOptions);
    searchResults.value = response;
    loading.value = false;
    setTimeout(() => {
        searchMuscle.value = ""
    }, 1000)
};
</script>
<template>
<main>
    <div  class="grid place-items-center mt-2">
     <form @submit.prevent="searchedMuscle">   
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
            <div class="relative">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input v-model.lazy="searchMuscle" type="search" id="default-search" class="block p-4 pl-10 text-sm focus:outline-none text-gray-900 bg-gray-50 rounded-lg border border-purple-300 focus:ring-purple-500 focus:border-purple-500 w-72 md:w-96" placeholder="Search by Muscle" required>
        <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
    </div>
</form>
    </div>
    <div v-if="loading" class="grid place-items-center mt-40">
         <Loader/>
    </div>
    <div class="flex justify-center items-center flex-wrap">
    <div v-for="search in searchResults" :key="search.id">
    <SearchedExercises 
    :id="search.id"
    :image="search.gifUrl"
    :name="search.name"
    />
    </div>
    </div>
</main>
</template>