<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";

let posts = ref([]);

//mounted
onMounted(() => {
  //get API from Laravel Backend
  axios
    .get("https://api.quran.sutanlab.id/surah")
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error.response.data);
    });
});
</script>

<template>
  <div class="text-gray-800">INDEX FFF</div>
</template>
