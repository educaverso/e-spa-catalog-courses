<script setup lang="ts">
import Logo from "./Logo.vue";
import Notifications from "./Notifications.vue";
import Search from "./Search.vue";
import Navigation from "./Navigation.vue";
import Profile from "./Profile.vue";
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
  <div class="ev-navbar">
    <div class="logo">
      <Logo />
      <HamburguerMenu :items="items" />
    </div>

    <div class="search">
      <Search />
    </div>

    <div class="secondary-navigation">
      <Navigation />
      <Notifications />
      <Profile />
    </div>
  </div>
</template>

<style lang="scss">
.ev-navbar {
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: var(--color-background-secondary);
  display: flex;
  justify-content: space-between;
  padding: 15px 10px;
  border-bottom: 1px solid var(--color-divider);
  flex-grow: 1;

  .navigation,
  .logo {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .secondary-navigation {
    display: flex;
    align-items: center;
    gap: 10px;
  }
}
</style>
