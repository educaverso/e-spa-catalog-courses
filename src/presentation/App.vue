<script setup lang="ts">
import { RouterView } from "vue-router";
import { Navbar } from "./components/navbar/";
</script>

<template>
  <div id="app">
    <Navbar />
    <RouterView />
  </div>
</template>

<style lang="scss"></style>
