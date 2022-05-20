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
  border-radius: 1.5rem;
  background-color: #fff;
  padding: 5px;
  height: 2.8rem;

  .icon {
    cursor: pointer;
    font: inherit;
    font-size: 1.6161rem;
    color: #ACAAAA;
    margin: 0 0.5rem;
  }

  .input-field {
    display: inline-flex;
    padding: 0;
    width: 0;
    color: #ACAAAA;
    background-color: transparent;
    box-shadow: none;
    outline: none;
    border: none;
    transition: 0.5s;
    font: inherit;
    font-size: 1.1rem;
    width: 390px;
  }
}
</style>
