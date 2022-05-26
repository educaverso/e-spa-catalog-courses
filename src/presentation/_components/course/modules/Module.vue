<script setup lang="ts">
import ModuleItem from "./ModuleItem.vue";
import ModuleHeader from "./ModuleHeader.vue";
import Collapse from "../../_shared/collapsed/Collapse.vue";

export interface ModuleInterface {
  to: string;
  title: string;
  qtyLessons: number;
  qtyChallenge: number;
  done: boolean;
}

defineProps<{
  item: ModuleInterface;
}>();
</script>

<template>
  <div class="ev-module">
    <Collapse>
      <template #activator="{ on }">
        <div class="pt-1 pb-1 pl-3 pr-3">
          <ModuleHeader
            v-on="on"
            :header="{
              title: item.title,
              qtyLessons: item.qtyLessons,
              qtyChallenge: item.qtyChallenge,
              done: item.done,
              duration: '40:35',
            }"
          />
        </div>
      </template>

      <div class="d-flex gap-2 pt-2 pb-2 pl-3 pr-3 ev-module__content">
        <ModuleItem
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
        />
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
