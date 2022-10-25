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
  lessons: ModuleContent[];
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
        <ModuleItem v-for="lesson in module.lessons" :key="lesson.to" :lesson="lesson"/>
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
