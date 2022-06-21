<script>
import YouTube from 'vue3-youtube'
export default {
    name: "ExerciseVideos",
    components: {
        YouTube
    },
    props: {
            id: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    videoId: {
        type: String,
        required: true
    }
    }
};
</script>
<template>
<div>
<div>
    <h1 class="text-2xl mt-10 font-bold">Watch {{title}} video tutorial</h1>
</div>
<div :key="id" class="mt-10">
   <div>
   <div class="grid md:place-items-center place-items-start">
      <YouTube :src="`https://www.youtube.com/watch?v=${videoId}`" height="300px" width="320px"/>
   </div>
     <div class="grid place-items-center mt-2">
        <h2 class="font-bold text-lg">{{title}}</h2>
     </div>
   </div>
</div>
</div>
</template>