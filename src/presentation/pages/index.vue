<script setup lang="ts">
import Youtube from "@/presentation/components/commons/youtube/Youtube.vue";
import AspectRatio from "../components/commons/aspect-ratio/AspectRatio.vue";
</script>

<template>
  <div class="ev-youtube-player">
    <AspectRatio :ratio="16/9">
      <Youtube ref="el" class="player" video-id="XxXKz9GtACg"></Youtube>
    </AspectRatio>
  </div>
</template>

<style lang="scss">
.ev-youtube-player {
  width: 80%;
}
</style>
