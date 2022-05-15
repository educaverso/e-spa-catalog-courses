<script setup lang="ts">
import icons from "@/components/icons";
import { ref } from "vue";

const isToggle = ref(false);
</script>

<template>
  <div class="ev-search">
    <input
      class="input"
      :class="{ toggle: isToggle }"
      type="text"
      placeholder="Cursos, pessoas, categorias"
    />
    <a href="#" @click.prevent="isToggle = !isToggle">
      <icons name="magnify" />
    </a>
  </div>
</template>

<style lang="scss">
.ev-search {
  display: flex;
  align-items: center;

  input {
    width: 0px;
    font-size: 1.1rem;
    background-color: transparent;
    box-shadow: none;
    color: #fff;
    border: 1px solid transparent;
    outline: none;
    padding: 10px;
    padding-left: 30px;
    transition: 0.5s ease all;

    &.toggle {
      width: 240px;
      border-color: #fff;
    }
  }
  a {
    position: absolute;
  }
}
</style>
