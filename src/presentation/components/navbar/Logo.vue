<script setup lang="ts">
import icons from "@/presentation/components/commons/icons";
import { RouterLink } from "vue-router";
</script>

<template>
  <RouterLink class="ev-logo" to="/">
    <!-- <icons class="secondary" name="pound" />educa<span class="foreground">verso</span> -->
    <!-- <img width="128" src="@/presentation/assets/img/brand.svg" /> -->
    <img  src="@/presentation/assets/img/logo.svg" />
  </RouterLink>
</template>

<style lang="scss">
@import "@/presentation/assets/css/breakpoint.scss";
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

  .secondary {
    color: var(--color-secondary);
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
