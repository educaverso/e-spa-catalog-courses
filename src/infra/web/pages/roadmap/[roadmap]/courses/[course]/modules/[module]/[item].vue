<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import Youtube from "@/infra/web/_components/_shared/youtube/Youtube.vue";
import AspectRatio from "@/infra/web/_components/_shared/aspect-ratio/AspectRatio.vue";
const route = useRoute();
const videoId = computed(() => {
  if (route.params.item === "introducao-a-programacao") {
    return "ETLmI_hS8HU";
  }
  return "1zy6DTHQDzM";
});
</script>

<template>
  <AspectRatio :ratio="16 / 9">
    <Youtube ref="el" :video-id="videoId"></Youtube>
  </AspectRatio>
</template>
