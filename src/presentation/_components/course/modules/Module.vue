<script setup lang="ts">
import type ModuleProps from "./ModuleProps";
import ModuleItem from "./ModuleItem.vue";
import ModuleHeader from "./ModuleHeader.vue";

defineProps<{
  item: ModuleProps;
}>();
</script>

<template>
  <div class="ev-module">
    <div class="pt-1 pb-1 pl-3 pr-3">
      <ModuleHeader />
    </div>

    <div class="d-flex gap-2 ev-module__content pt-2 pb-2 pl-3 pr-3">
      <ModuleItem
        :item="{
          to: '/',
          title: 'Introdução à programação',
          duration: '10:23',
          icon: 'movie-open-play-outline',
          done: false,
        }"
      />

      <ModuleItem
        :item="{
          to: '/',
          title: 'Variáveis e tipos',
          duration: '07:00',
          icon: 'movie-open-play-outline',
          done: false,
        }"
      />

      <ModuleItem
        :item="{
          to: '/',
          title: 'Operadores lógicos',
          duration: '07:00',
          icon: 'movie-open-play-outline',
          done: false,
        }"
      />

      <ModuleItem
        :item="{
          to: '/',
          title: 'Operadores lógicos',
          duration: '10:00',
          icon: 'format-text',
          done: false,
        }"
      />

      <ModuleItem
        :item="{
          to: '/',
          title: 'Estruturas de controle e os operadores lógicos',
          duration: '10:00',
          icon: 'movie-open-play-outline',
          done: false,
        }"
      />

      <ModuleItem
        :item="{
          to: '/',
          title: 'Desafio',
          duration: '10:00',
          icon: 'help',
          done: false,
        }"
      />
    </div>
  </div>
</template>

<style lang="scss">
.ev-module {
  background-color: var(--theme-dark-panel);
  border-radius: 1rem;

  &__content {
    border-top: 1px solid var(--theme-dark-hover);
    flex-direction: column;
  }
}
</style>
