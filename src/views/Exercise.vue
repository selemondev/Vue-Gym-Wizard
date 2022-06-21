<script setup>
import { useRoute } from 'vue-router';
import { useFetch, exerciseOptions, youtubeOptions } from '../utils/useFetch';
import ExerciseVideos from '../components/ExerciseVideos.vue';
import { ref } from 'vue';
import Loader from '../components/Loader.vue';
const exerciseUrl = 'https://exercisedb.p.rapidapi.com';
const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
const route = useRoute();
const exerciseDetail = ref([]);
const exerciseVideos = ref([]);
const loading = ref(false);
const fetchData = async () => {
    loading.value = true;
    const detail = await useFetch(`${exerciseUrl}/exercises/exercise/${route.params.id}`, exerciseOptions);
    exerciseDetail.value = detail;

    const detailVideo = await useFetch(`${youtubeSearchUrl}/search?query=${detail.name} exercise`, youtubeOptions);
      exerciseVideos.value = detailVideo.contents.splice(0,1);
    
    loading.value = false;
};

fetchData()
</script>

<template>
<main>
    <div v-if="loading" class="grid place-items-center mt-40">
    <Loader/>
    </div>
       <div class="grid place-items-center" v-else>
        <img :src="exerciseDetail.gifUrl" :alt="exerciseDetail.name">
        <h2 class="font-bold mt-2 md:text-3xl text-lg">{{exerciseDetail.name}}</h2>
        <div v-for="exercise in exerciseVideos" :key="exercise.id">
        <ExerciseVideos
        :id="exercise.video.channelId"
        :videoId="exercise.video.videoId"
        :title="exercise.video.title"
         />
        </div>
    </div>
</main>
</template>