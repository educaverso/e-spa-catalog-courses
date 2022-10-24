<script setup lang="ts">
import ModuleItem, {  type ModuleContent } from "./ModuleItem.vue";
import ModuleHeader from "./ModuleHeader.vue";
import Collapse from "../../_shared/collapsed/Collapse.vue";

export interface ModuleInterface {
  to: string;
  title: string;
  qtyLessons: number;
  qtyChallenge: number;
  done: boolean;
  items: ModuleContent[];
  duration: string;
}

defineProps<{
  module: ModuleInterface;
}>();
</script>

<template>
  <div class="ev-module">
    <Collapse>
      <template #activator="{ on }">
        <div class="pt-1 pb-1 pl-3 pr-3 mb-2">
          <ModuleHeader v-on="on" :header="module" />
        </div>
      </template>

      <div class="d-flex gap-3 pt-2 pb-2 pl-3 pr-3 ev-module__content">
        <ModuleItem v-for="item in module.items" :key="item.to" :item="item" />
        <!-- <ModuleItem
          :item="{
            to: item.to,
            title: 'Introdução à programação',
            duration: '10:23',
            icon: 'movie-open-play-outline',
            done: true,
          }"
        />

         <ModuleItem
          :item="{
            to: item.to,
            title: 'Variáveis e tipos',
            duration: '07:00',
            icon: 'movie-open-play-outline',
            done: true,
          }"
        />

        <ModuleItem
          :item="{
            to: item.to,
            title: 'Operadores lógicos',
            duration: '07:00',
            icon: 'format-text',
            done: false,
          }"
        />

        <ModuleItem
          :item="{
            to: item.to,
            title: 'Estruturas de controle e os operadores lógicos',
            duration: '10:00',
            icon: 'movie-open-play-outline',
            done: false,
          }"
        />

        <ModuleItem
          :item="{
            to: item.to,
            title: 'Desafio',
            duration: '10:00',
            icon: 'help',
            done: false,
          }"
        /> -->
      </div>
    </Collapse>
  </div>
</template>

<style lang="scss">
.ev-module {
  background-color: var(--theme-dark-panel);
  border-radius: 1rem;

  &__content {
    flex-direction: column;
  }
}
</style>
