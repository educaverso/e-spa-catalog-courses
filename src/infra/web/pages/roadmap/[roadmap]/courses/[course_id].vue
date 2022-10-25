<script setup lang="ts">
import { Breadcrumb } from "@/infra/web/_components/_shared/breadcrumb";
import { useWindow } from '@/composables/useWindow'
import Module, {
  type ModuleInterface,
} from "@/infra/web/_components/course/modules/Module.vue";

const breadcrumbItems = [
  { to: "/roadmap/1/courses/1", value: "Introdução à computação" },
];

const modules: ModuleInterface[] = [
  {
    to: "/roadmap/1/courses/1/modules/1",
    title: "Apresentação",
    qtyLessons: 4,
    qtyChallenge: 1,
    done: false,
    duration: "50:00",
    lessons: [
      {
        to: "introducao-a-programacao",
        title: "introdução à programação",
        duration: "10:23",
        done: false,
        type: "video",
        uri: "ETLmI_hS8HU",
      },
      {
        to: "variaveis-e-tipos",
        title: "Variáveis e tipos",
        duration: "07:00",
        done: false,
        type: "video",
        uri: "ETLmI_hS8HU",
      },
      {
        to: "operadores-logicos",
        title: "Operadores lógicos",
        done: false,
        type: "text",
        content: "lorem",
      },
      {
        to: "estruturas-de-controle-e-os-operadores-logicos",
        title: "Estruturas de controle e os operadores lógicos",
        duration: "10:00",
        done: false,
        type: "video",
        uri: "ETLmI_hS8HU",
      },
      {
        to: "desafio",
        title: "Desafio",
        done: false,
        type: "challenge",
        content: "",
      },
    ],
  },

  {
    to: "/roadmap/1/courses/1/modules/1",
    title: "Apresentação",
    qtyLessons: 4,
    qtyChallenge: 1,
    done: false,
    duration: "50:00",
    lessons: [
      {
        to: "introducao-a-programacao",
        title: "introdução à programação",
        duration: "10:23",
        done: false,
        type: "video",
        uri: "ETLmI_hS8HU",
      },
      {
        to: "variaveis-e-tipos",
        title: "Variáveis e tipos",
        duration: "07:00",
        done: false,
        type: "video",
        uri: "ETLmI_hS8HU",
      },
      {
        to: "operadores-logicos",
        title: "Operadores lógicos",
        done: false,
        type: "text",
        content: "lorem",
      },
      {
        to: "estruturas-de-controle-e-os-operadores-logicos",
        title: "Estruturas de controle e os operadores lógicos",
        duration: "10:00",
        done: false,
        type: "video",
        uri: "ETLmI_hS8HU",
      },
      {
        to: "desafio",
        title: "Desafio",
        done: false,
        type: "challenge",
        content: "",
      },
    ],
  },

  {
    to: "/roadmap/1/courses/1/modules/1",
    title: "Apresentação",
    qtyLessons: 4,
    qtyChallenge: 1,
    done: false,
    duration: "50:00",
    lessons: [
      {
        to: "introducao-a-programacao",
        title: "introdução à programação",
        duration: "10:23",
        done: false,
        type: "video",
        uri: "ETLmI_hS8HU",
      },
      {
        to: "variaveis-e-tipos",
        title: "Variáveis e tipos",
        duration: "07:00",
        done: false,
        type: "video",
        uri: "ETLmI_hS8HU",
      },
      {
        to: "operadores-logicos",
        title: "Operadores lógicos",
        done: false,
        type: "text",
        content: "lorem",
      },
      {
        to: "estruturas-de-controle-e-os-operadores-logicos",
        title: "Estruturas de controle e os operadores lógicos",
        duration: "10:00",
        done: false,
        type: "video",
        uri: "ETLmI_hS8HU",
      },
      {
        to: "desafio",
        title: "Desafio",
        done: false,
        type: "challenge",
        content: "",
      },
    ],
  },

  {
    to: "/roadmap/1/courses/1/modules/1",
    title: "Apresentação",
    qtyLessons: 4,
    qtyChallenge: 1,
    done: false,
    duration: "50:00",
    lessons: [
      {
        to: "introducao-a-programacao",
        title: "introdução à programação",
        duration: "10:23",
        done: false,
        type: "video",
        uri: "ETLmI_hS8HU",
      },
      {
        to: "variaveis-e-tipos",
        title: "Variáveis e tipos",
        duration: "07:00",
        done: false,
        type: "video",
        uri: "ETLmI_hS8HU",
      },
      {
        to: "operadores-logicos",
        title: "Operadores lógicos",
        done: false,
        type: "text",
        content: "lorem",
      },
      {
        to: "estruturas-de-controle-e-os-operadores-logicos",
        title: "Estruturas de controle e os operadores lógicos",
        duration: "10:00",
        done: false,
        type: "video",
        uri: "ETLmI_hS8HU",
      },
      {
        to: "desafio",
        title: "Desafio",
        done: false,
        type: "challenge",
        content: "",
      },
    ],
  },
];

const { isLg } = useWindow()
</script>

<template>
  <div class="ev-course pr-4">
    <div class="pl-4 pt-2 pb-2 pr-4">
      <Breadcrumb :items="breadcrumbItems" />
    </div>
    <div :class="['gap-2', {'d-flex pb-2': isLg}]">
      <div class="flex-fill">
        <RouterView></RouterView>
      </div>
      <!-- // d-flex gap-2 ev-course__content -->
      <div :class="['gap-2 ',{'d-flex ev-course__content': isLg}]">
        <Module v-for="module in modules" :key="module.to" :module="module" />
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
