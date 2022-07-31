<script setup lang="ts">
import icons from "@/infra/web/_components/_shared/icons";
import { ref } from "vue";

const query = ref("");
</script>

<template>
  <label class="d-flex align-center ev-search">
    <icons name="magnify" />
    <input v-model="query" type="text" placeholder="Cursos, trilhas ou categorias" class="input-field" />
  </label>
</template>

<style lang="scss">
@import "@/infra/web/_assets/css/breakpoint.scss";

.ev-search {
  border-radius: 1.4rem;
  background-color: var(--theme-dark-foreground);
  height: 2.8rem;

  .icon {
    cursor: pointer;
    font-size: 1.6161rem;
    color: var(--theme-dark-label);
    margin: 0 0.5rem;
  }

  .input-field {
    display: inline-flex;
    padding: 0;
    width: 0;
    color: var(--theme-dark-label);
    background-color: transparent;
    box-shadow: none;
    outline: none;
    border: none;
    transition: 0.5s;
    width: 290px;

    @media (max-width: $breakpoint-xs) {
      width: 100px;
    }

    @media (max-width: $breakpoint-md) {
      width: 190px;
    }
  }
}
</style>
