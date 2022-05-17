<script setup lang="ts">
import { RouterView } from "vue-router";
import Navbar from "./components/navbar/index.vue";
</script>

<template>
  <div>
    <Navbar />
    <RouterView />
  </div>
</template>

<style lang="scss">
</style>
