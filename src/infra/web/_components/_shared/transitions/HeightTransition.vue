<script setup lang="ts">
import { Transition, type BaseTransitionProps } from "vue";
export interface ModeInterface extends BaseTransitionProps {}

defineProps<ModeInterface>();

type TransitionHook = (el: HTMLElement) => void;

const onEnter: TransitionHook = (el) => {
  el.style.overflow = "hidden";
  el.style.height = "auto";

  const height = window.getComputedStyle(el).height;

  el.style.height = "0";

  window.getComputedStyle(el).height;

  requestAnimationFrame(() => {
    el.style.height = height;
  });
};

const onAfterEnter: TransitionHook = (el) => {
  el.style.height = "auto";
};

const onLeave: TransitionHook = (el) => {
  const height = window.getComputedStyle(el).height;

  el.style.height = height;

  window.getComputedStyle(el).height;

  requestAnimationFrame(() => {
    el.style.height = "0";
  });
};
</script>

<template>
  <Transition
    name="height-transition"
    :mode="mode"
    @after-enter="onAfterEnter"
    @enter="onEnter"
    @leave="onLeave"
  >
    <slot></slot>
  </Transition>
</template>

<style lang="scss">
.height-transition {
  &-enter-active,
  &-leave-active {
    overflow: hidden;
    transition: height 0.5s ease;
  }
}
</style>
