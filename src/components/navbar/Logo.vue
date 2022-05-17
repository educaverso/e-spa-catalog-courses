<script setup lang="ts">
import icons from "@/components/commons/icons";
import { RouterLink } from "vue-router";
</script>

<template>
  <RouterLink class="ev-logo" to="/">
    <icons name="video" />educa<span class="foreground">verso</span>
  </RouterLink>
</template>

<style lang="scss">
@import "@/assets/css/breakpoint.scss";
.ev-logo {
  display: flex;
  align-items: center;
  font-weight: bolder;
  font-size: 1.8rem;
  color: var(--color-primary);

  .foreground {
    color: var(--color-foreground);
    transition: 0.4s;
    font-weight: lighter;
  }

  @media (max-width: $breakpoint-sm) {
    display: none;
  }

  @media (max-width: $breakpoint-md) {
    font-size: 1.2rem;
  }
}
</style>
