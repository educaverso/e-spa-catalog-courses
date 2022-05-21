<script setup lang="ts">
import { RouterView } from "vue-router";
import { Navbar } from "./components/navbar/";
</script>

<template>
  <div id="app">
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
.container {
  @extend .fill-w;
  max-width: 1399.98px;
  min-width: 359.98px;
}
</style>
