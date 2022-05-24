<script setup lang="ts">
import { RouterView } from "vue-router";
import { Navbar } from "./components/navbar/";
</script>

<template>
  <div>
    <div class="container">
      <Navbar />
    </div>

    <main class="container">
      <RouterView />
    </main>
  </div>
</template>

<style lang="scss">
@import "@/presentation/assets/css/main.scss";
@import "@/presentation/assets/css/breakpoint.scss";

.container {
  @extend .fill-w;
  min-width: $breakpoint-xs;
  max-width: $breakpoint-xl;
}
</style>
