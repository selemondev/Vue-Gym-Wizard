<script setup>
import Chest from "../assets/chest.jpg";
import Abs from "../assets/abs.png";
import Shoulder from "../assets/Shoulders.jpg";
import Neck from "../assets/neck.jpg";
import Legs from "../assets/legs.jpg";
import Calves from "../assets/calves.jpg";
import Biceps from "../assets/biceps.jpg";
import LowerArms from "../assets/lower arms.jpg";

const bodyParts = [
    {
        id:1,
        name: "Abs",
        image: Abs,
        path:"/abs"
    },
       {
        id:2,
        name: "Biceps",
        image: Biceps,
        path: "/biceps"
    },
       {
        id:3,
        name: "Calves",
        image: Calves,
        path: "/calves"
    },
       {
        id:4,
        name: "Chest",
        image: Chest,
        path: "/chest"
    },
       {
        id:5,
        name: "ForeArms",
        image: LowerArms,
        path: "/foreArms"
    },
       {
        id:6,
        name: "Legs",
        image: Legs,
        path: "/legs"
    },
       {
        id:7,
        name: "Neck",
        image: Neck,
        path: "/neck"
    },
       {
        id:8,
        name: "Shoulder",
        image: Shoulder,
        path: "/shoulder"
    },
]
</script>
<template>
<div id="exercises">
    <div class="grid place-items-center mt-20">
        <h1 class="font-bold text-5xl">Exercises</h1>
        <span class="w-20 md:mt-1 rounded-md p-1 bg-purple-700"></span>
    </div>

    <div class="flex justify-center items-center flex-wrap md:mt-4">
           <div v-for="body in bodyParts" :key="body.id">
           <router-link :to="body.path">
             <img :src="body.image" :alt="body.name" class="w-48 h-48 m-5" />
           </router-link>
      <div class="grid place-items-center">
        <h2 class="font-bold md:text-lg">{{body.name}}</h2>
    </div>
    </div>
    </div>
</div>
</template>