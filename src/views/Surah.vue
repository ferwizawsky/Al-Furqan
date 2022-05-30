<script setup>
import { useRouter, useRoute } from "vue-router";
import axios from "axios";
import { onMounted, ref } from "vue";

let ayahs = ref([]);
let route = useRoute();
//mounted $route.params.id
onMounted(() => {
  //get API from Laravel Backend
  axios
    .get("https://api.quran.sutanlab.id/surah/" + route.params.id)
    .then((response) => {
      ayahs.value = response.data.data;
      console.log(ayahs);
    })
    .catch((error) => {
      console.log(error.response.data);
    });
});
</script>

<template>
  <div class="text-gray-800 px-4 py-4 text-sm">
    <div class="grid grid-cols-1 lg:w-1/2 2xl:w-1/4 mx-auto">
      <div
        v-for="(ayah, index) in ayahs.verses"
        :key="index"
        class="bg-white p-4 pb-6 rounded-lg drop-shadow-xl relative overflow-y-hidden mt-10"
      >
        <div
          class="absolute top-0 right-0 p-1 bg-green-500 text-white text-xs font-bold"
        >
          {{ ayah.number.inSurah }}
        </div>
        <div class="mt-4 text-right text-4xl px-4 saleem">
          {{ ayah.text.arab }}
        </div>
        <!-- <div class="mt-4 text-justify text-xs px-4">"{{ ayah.tafsir.id }}"</div> -->
      </div>
    </div>
  </div>
</template>
