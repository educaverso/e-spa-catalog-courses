<script setup lang="ts">
import { RouterView } from "vue-router";
import { Navbar } from "./_components/navbar/";
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
@import "@/presentation/_assets/css/main.scss";
@import "@/presentation/_assets/css/breakpoint.scss";

.container {
  @extend .fill-w;
  margin: 0 auto;
  min-width: $breakpoint-xs;
  max-width: $breakpoint-xl;
}
</style>
