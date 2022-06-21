<script setup>
import { SearchIcon } from "@heroicons/vue/solid";
</script>
<template>
<header>
    <nav class="flex justify-between items-center py-2 w-full bg-[#eee] px-2">
        <div>
           <router-link to="/">
             <img src="../assets/weight-logo.png" alt="Logo" class="w-14 h-10"/>
           </router-link>
        </div>
        <div>
            <ul class="inline-flex">
                <li class="li-tag h-10 w-10  md:pt-3"><router-link to="/search"><SearchIcon/></router-link></li>
                <li class="li-tag"><router-link to="/">Home</router-link></li>
                <li class="li-tag">
                    <a href="#exercises" v-smooth-scroll>
                        Exercises
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</header>
</template>