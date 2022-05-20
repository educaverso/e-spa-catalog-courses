<script setup lang="ts">
import icons from "@/presentation/components/commons/icons";
import { ref } from "vue";

const query = ref("");
</script>

<template>
  <label class="ev-search">
    <icons name="magnify" />
    <input
      v-model="query"
      type="text"
      placeholder="Cursos, trilhas ou categorias"
      class="input-field"
    />
  </label>
</template>

<style lang="scss">
.ev-search {
  display: flex;
  align-items: center;
  border-radius: 1em;
  background-color: #fff;
  padding: 5px;
  border-radius: 1em;
  height: 2.8rem;

  .icon {
    cursor: pointer;
    font: inherit;
    font-size: 1.6161rem;
    color: #6c6c6c;
  }

  .input-field {
    display: inline-flex;
    padding: 0;
    width: 0;
    color: #6c6c6c;
    background-color: transparent;
    box-shadow: none;
    outline: none;
    border: none;
    transition: 0.5s;
    font: inherit;
    font-size: 1.1rem;
    width: 400px;
  }
}
</style>
