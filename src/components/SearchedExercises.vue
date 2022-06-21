<script setup>
const props = defineProps({
    name: {
        type: String,
        required: true,
    },

    id: {
        type:String,
        required: true,
    },

    image: {
        type: String,
        required:true,
    },
});
function truncate(string, n) {
    return string?.length > n ? string.substring(0, n-1 ) + "....": string;
}

</script>
<template>
<main>
        <div>
       <div>
        <router-link :to="{name:'exercise', params:{id: props.id}}">
           <img :src="props.image" :alt="`${props.name}`" class="w-48 h-48 m-10">
    </router-link>
    <div class="grid place-items-center">
        <h2 class="font-bold md:text-lg">{{truncate(props.name,20)}}</h2>
    </div>
        </div>
    </div>
</main>
</template>