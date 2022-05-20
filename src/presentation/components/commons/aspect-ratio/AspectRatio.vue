<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  tag: { type: String, default: "div" },
  ratio: { type: Number, default: 1 },
});

const style = computed(() => ({
  paddingBottom: `${100 / props.ratio}%`,
}));
</script>

<template>
  <component :is="tag" class="ev-aspect-ratio" :style="style">
    <slot></slot>
  </component>
</template>

<style lang="scss">
.ev-aspect-ratio {
  position: relative;
  flex: 1;
  & > * {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
