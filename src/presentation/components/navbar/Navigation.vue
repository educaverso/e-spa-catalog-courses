<script setup lang="ts">
import { RouterLink } from "vue-router";
import HamburguerMenu from "../commons/hamburguer-menu/index.vue";

const items = [
  { value: "Início", to: "/" },
  { value: "Cursos", to: "/courses" },
  { value: "Trilhas", to: "/road-map" },
  { value: "Bombando", to: "/top" },
  { value: "Minha lista", to: "/my-list" },
];
</script>

<template>
  <div class="d-flex align-center ev-nav-menu">
    <RouterLink class="md" v-for="(item, i) in items" :key="i" :to="item.to">
      {{ item.value }}
    </RouterLink>
  </div>
</template>

<style lang="scss">
@import "@/presentation/assets/css/breakpoint.scss";
.ev-nav-menu {
  gap: 10px;
  cursor: pointer;

  a:hover,
  .router-link-active {
    color: var(--theme-dark-secondary);
    transition: 0.5s;
  }

  @media (max-width: $breakpoint-md){
    display: none !important;
  }
}
</style>
