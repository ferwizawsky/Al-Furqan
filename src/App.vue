<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
  <div
    class="fixed top-0 left-0 w-full h-12 bg-white drop-shadow-lg z-10 flex items-center justify-between px-4"
  >
    <div class="font-bold tracking-widest text-gray-500">Al-Furqon</div>
  </div>
  <div class="min-h-screen bg-gray-100 pt-16">
    <router-view></router-view>
  </div>
</template>
