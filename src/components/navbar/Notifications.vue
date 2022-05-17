<script setup lang="ts">
import icons from "@/components/commons/icons";
</script>

<template>
  <a href="#" class="ev-pulse"><icons name="bell-ring-outline" /></a>
</template>

<style lang="scss">
.ev-pulse {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 1.618em;
  height: 1.618em;
  cursor: pointer;
  position: relative;
  background-color: var(--color-background-navbar);

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border: 5px solid var(--color-primary);
    border-radius: 50%;
    transform: scale(0);
    animation: pulse 2s infinite ease-out;
    opacity: 0;
  }

  @keyframes pulse {
    40% {
      opacity: 0.8;
    }

    100% {
      opacity: 0;
      transform: scale(1.25);
    }
  }
}
</style>
