<script setup lang="ts">
import { RouterView } from "vue-router";
import { Navbar } from "./components/navbar/";
</script>

<template>
  <div id="app">
    <Navbar />

    <main>
      <RouterView />
    </main>
  </div>
</template>

<style lang="scss">
main {
  padding: 10px 0;
}
</style>
