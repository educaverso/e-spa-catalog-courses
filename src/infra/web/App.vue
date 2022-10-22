<script setup lang="ts">
import { RouterView } from "vue-router";
import { Navbar } from "./_components/navbar/";
</script>

<template>
  <div>
    <!-- <Navbar /> -->
    <RouterView />
  </div>
</template>

<style lang="scss">
@import "@/infra/web/_assets/css/main.scss";
@import "@/infra/web/_assets/css/breakpoint.scss";

.container {
  @extend .fill-w;
  margin: 0 auto;
  min-width: $breakpoint-xs;
  max-width: $breakpoint-xl;
}

a:hover,
.router-link-active {
  color: var(--theme-dark-secondary);
  transition: 0.5s;
}
</style>
