<script setup>
import { useRouter, useRoute } from "vue-router";
import axios from "axios";
import { onMounted, ref } from "vue";

let ayahs = ref([]);
let router = useRouter();

//mounted
onMounted(() => {
  //get API from Laravel Backend
  axios
    .get("https://api.quran.sutanlab.id/surah")
    .then((response) => {
      ayahs.value = response.data.data;
      console.log(ayahs);
    })
    .catch((error) => {
      console.log(error.response.data);
    });
});

function move(e) {
  router.push("/" + e);
}
</script>

<template>
  <div class="text-gray-800 px-4 py-4 text-sm">
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8"
    >
      <div
        v-for="(ayah, index) in ayahs"
        :key="index"
        @click="move(ayah.number)"
        class="bg-white p-2 rounded-lg drop-shadow-xl relative overflow-y-hidden"
      >
        <div
          class="absolute top-0 right-0 p-2 bg-green-500 text-white font-bold"
        >
          {{ ayah.number }}
        </div>
        <div>
          Surah {{ ayah.name.transliteration.id }} <br />
          <span class="bg-green-500 px-4 rounded-lg text-white text-xs">{{
            ayah.name.translation.id
          }}</span>
        </div>

        <div class="mt-4 text-right text-4xl px-4 saleem">
          {{ ayah.name.long }}
        </div>
        <!-- <div class="mt-4 text-justify text-xs px-4">"{{ ayah.tafsir.id }}"</div> -->
      </div>
    </div>
  </div>
</template>
