<script setup lang="ts">
import { RouterLink } from "vue-router";
import { MenuButton } from "../_shared/menu-button/";

const items = [
  { value: "Início", to: "/" },
  { value: "Cursos", to: "/courses" },
  { value: "Trilhas", to: "/roadmap" },
  { value: "Bombando", to: "/top" },
  { value: "Minha lista", to: "/my-list" },
];
</script>

<template>
  <div>
    <MenuButton :items="items" />
    <div class="d-flex align-center gap-2 ev-nav-menu">
      <RouterLink class="md" v-for="(item, i) in items" :key="i" :to="item.to">
        {{ item.value }}
      </RouterLink>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/infra/web/_assets/css/breakpoint.scss";

.ev-nav-menu {
  cursor: pointer;

  @media (max-width: $breakpoint-md) {
    display: none !important;
  }
}
</style>
