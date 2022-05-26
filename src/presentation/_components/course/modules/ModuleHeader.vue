<script setup lang="ts">
import icons from "@/presentation/_components/_shared/icons";

export interface ModuleHeaderInterface {
  title: string;
  qtyLessons: number;
  qtyChallenge: number;
  done: boolean;
  duration: string;
}

defineProps<{
  header: ModuleHeaderInterface;
}>();
</script>

<template>
  <div class="ev-module-header">
    <div class="d-flex align-center justify-space-between">
      <div :class="['d-flex align-center gap-2 ev-module-header__title']">
        <icons
          :class="[
            header.done ? 'ev-module-header--done' : 'ev-module-header__icon',
          ]"
          name="check-decagram"
        />
        <span class="">{{ header.title }}</span>
      </div>
      <div>
        <icons name="chevron-down" />
      </div>
    </div>
    <div
      class="d-flex align-center justify-space-between ev-module-header__info"
    >
      <div class="d-flex align-center gap-1">
        <div>
          {{ header.qtyLessons }} aula<span v-if="header.qtyLessons > 1"
            >s</span
          >
        </div>
        <icons name="circle-small" />
        <div>
          {{ header.qtyChallenge }} desafio<span v-if="header.qtyChallenge > 1"
            >s</span
          >
        </div>
      </div>
      <div class="d-flex align-center gap-4">
        <span>{{ header.duration }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.ev-module-header {
  cursor: pointer;

  &--done {
    color: var(--theme-dark-secondary);
  }

  &__title {
    color: var(--theme-dark-primary);
    font-weight: bolder;
  }

  &__icon {
    color: var(--theme-dark-label);
  }

  &__info {
    color: var(--theme-dark-label);
    font-size: small;
  }

  &__content {
    flex-direction: column;
  }
}
</style>
