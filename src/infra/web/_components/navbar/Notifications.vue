<script setup lang="ts">
import icons from "@/infra/web/_components/_shared/icons";
</script>

<template>
  <a href="#" class="align-center ev-pulse">
    <icons name="bell-ring-outline" />
  </a>
</template>

<style lang="scss">
.ev-pulse {
  position: relative;
  font-size: 1.618rem;
  display: inline-flex;
  justify-content: center;
  border-radius: 50%;
  width: 1.618em;
  height: 1.618em;
  cursor: pointer;

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border: 5px solid var(--theme-dark-primary);
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
