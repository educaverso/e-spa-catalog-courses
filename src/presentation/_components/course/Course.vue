<script setup lang="ts">
import Youtube from "@/presentation/_components/_shared/youtube/Youtube.vue";
import AspectRatio from "@/presentation/_components/_shared/aspect-ratio/AspectRatio.vue";
import { Breadcrumb } from "@/presentation/_components/_shared/breadcrumb";
import Module from "./modules/Module.vue";

const breadcrumbItems = [
  { to: "/", value: "Ciência da computação" },
  { to: "/", value: "Introdução à computação" },
];

const modules = [
  {
    to: "/",
    title: "Apresentação",
    qtyLessons: 4,
    qtyChallenge: 1,
    done: true,
  },

  {
    to: "/",
    title: "Estruturas sequenciais",
    qtyLessons: 6,
    qtyChallenge: 2,
    done: false,
  },

  {
    to: "/",
    title: "Estruturas de repetição",
    qtyLessons: 8,
    qtyChallenge: 1,
    done: false,
  },
  {
    to: "/",
    title: "Vetores",
    qtyLessons: 8,
    qtyChallenge: 1,
    done: false,
  },
];
</script>

<template>
  <div class="ev-youtube-player">
    <div class="pl-5 pt-2 pb-2 pr-5">
      <Breadcrumb :items="breadcrumbItems" />
    </div>
    <div class="d-flex">
      <div class="video">
        <AspectRatio :ratio="16 / 9">
          <Youtube ref="el" class="player" video-id="ETLmI_hS8HU"></Youtube>
        </AspectRatio>
      </div>
      <div class="course-content">
        <Module v-for="(m, index) in modules" :key="index" :item="m" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.ev-youtube-player {
  .course-content {
    width: 30%;
    margin: 0 20px;
  }

  .video {
    width: 70%;
    align-items: flex-start;
  }
}
</style>
