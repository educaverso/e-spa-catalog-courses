<script setup lang="ts">
import { ref, toRefs } from "vue";
import { useYoutube } from "./useYoutube";

const el = ref<HTMLElement>();

// const props = defineProps({
//   videoId: {
//     type: String,
//     required: true,
//   },
//   volume: {
//     type: Number,
//     default: 100,
//   },
// });
// const reactiveProps = toRefs(props);

const { volume, changeVideo, play, pause } = useYoutube(el, {
  playerVars: { modestbranding: 1, rel: 0 },
});
</script>

<template>
  <div>
    <div ref="el"></div>

    <button @click="changeVideo('SVSf8fNp_kg')">Load</button>
    <button @click="play()">Play</button>
    <button @click="pause()">||</button>
    <input v-model="volume" type="range" />

    {{ volume }}
  </div>
</template>

<style></style>
