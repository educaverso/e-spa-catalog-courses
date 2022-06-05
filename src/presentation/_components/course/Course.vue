<script setup lang="ts">
import Youtube from "@/presentation/_components/_shared/youtube/Youtube.vue";
import AspectRatio from "@/presentation/_components/_shared/aspect-ratio/AspectRatio.vue";
import { Breadcrumb } from "@/presentation/_components/_shared/breadcrumb";
import Module from "./modules/Module.vue";

const breadcrumbItems = [
  { to: "/roadmap/1/courses/1", value: "Introdução à computação" },
];

const modules = [
  {
    to: "/roadmap/1/courses/1/modules/1",
    title: "Apresentação",
    qtyLessons: 4,
    qtyChallenge: 1,
    done: false,
  },

  {
    to: "/roadmap/1/courses/1/modules/2",
    title: "Estruturas sequenciais",
    qtyLessons: 6,
    qtyChallenge: 2,
    done: false,
  },

  {
    to: "/roadmap/1/courses/1/modules/3",
    title: "Estruturas de repetição",
    qtyLessons: 8,
    qtyChallenge: 1,
    done: false,
  },
  {
    to: "/roadmap/1/courses/1/modules/4",
    title: "Vetores",
    qtyLessons: 8,
    qtyChallenge: 1,
    done: false,
  },
];
</script>

<template>
  <div class="ev-course pr-4">
    <div class="pl-4 pt-2 pb-2 pr-4">
      <Breadcrumb :items="breadcrumbItems" />
    </div>
    <div class="d-flex gap-2">
      <div class="flex-fill">
        <AspectRatio :ratio="16 / 9">
          <Youtube ref="el" video-id="ETLmI_hS8HU"></Youtube>
        </AspectRatio>
      </div>
      <div class="d-flex gap-2 ev-course__content">
        <Module v-for="(m, index) in modules" :key="index" :item="m" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.ev-course {
  font-family: "Poppins", sans-serif;
  line-height: 1.5;
  &__content {
    width: 350px;
    flex-direction: column;
  }
}
</style>
