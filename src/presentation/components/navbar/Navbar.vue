<script setup lang="ts">
import Notifications from "./Notifications.vue";
import Search from "./Search.vue";
import Navigation from "./Navigation.vue";
import Profile from "./Profile.vue";

import { Logo } from "../_shared/logo";
</script>

<template>
  <div class="ev-navbar d-flex px-4 py-2 fill-w">
    <div class="d-flex align-center">
      <Logo />
    </div>

    <Search />

    <div class="d-flex align-center nav">
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
  background-color: var(--theme-dark-panel);
  color: var(--theme-dark-foreground);
  justify-content: space-between;

  .nav {
    gap: 10px;
  }
}
</style>
