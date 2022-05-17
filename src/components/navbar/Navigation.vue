<script setup lang="ts">
import { RouterLink } from "vue-router";
import icons from "../commons/icons";
import Dropdown from "../commons/dropdown/index.vue";
import DropdownItem from "../commons/dropdown/DropdownItem.vue";
import HamburguerMenu from "../commons/hamburguer-menu/index.vue";

const items = [
  { value: "Início", to: "/" },
  { value: "Cursos", to: "/courses" },
  { value: "Roteiros", to: "/road-map" },
  { value: "Bombando", to: "/top" },
  { value: "Minha lista", to: "/my-list" },
];
</script>

<template>
  <div class="ev-nav-menu">
    <div>
      <HamburguerMenu />
    </div>

    <RouterLink class="md" v-for="(item, i) in items" :key="i" :to="item.to">
      {{ item.value }}
    </RouterLink>

    <!-- <Dropdown class="sm">
      <icons name="menu" />
      <template #items>
        <DropdownItem v-for="(item, i) in items" :key="i">
          <RouterLink :to="item.to">
            {{ item.value }}
          </RouterLink>
        </DropdownItem>
      </template>
    </Dropdown> -->
  </div>
</template>

<style lang="scss">
@import "@/assets/css/breakpoint.scss";

.ev-nav-menu {
  display: flex;
  align-items: center;
  gap: 10px;

  a:hover,
  .router-link-active {
    color: var(--color-primary);
    text-shadow: 0 0 1px var(--color-primary);
    transition: 0.5s;
  }

  .sm {
    font-size: 1.8rem;
    display: none;
  }

  @media (max-width: $breakpoint-sm) {
    font-size: 1rem;

    .sm {
      display: block;
    }

    .md {
      display: none;
    }
  }
}
</style>
