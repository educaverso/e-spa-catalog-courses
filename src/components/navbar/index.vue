<script setup lang="ts">
import Logo from "./Logo.vue";
import Notifications from "./Notifications.vue";
import Search from "./Search.vue";
import Navigation from "./Navigation.vue";
import Profile from "./Profile.vue";
</script>

<template>
  <div class="ev-navbar">
    <div class="navigation">
      <Logo />
      <Navigation />
    </div>

    <div class="secondary-navigation">
      <Search />
      <Notifications />
      <Profile />
    </div>
  </div>
</template>

<style lang="scss">
.ev-navbar {
  background-color: var(--color-background-navbar);
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  flex-grow: 1;

  .navigation {
    display: flex;
    align-items: center;
    gap: 20px;
    color: var(--color-foreground);
  }

  .secondary-navigation {
    display: flex;
    align-items: center;
    font-size: 1.618rem;
    gap: 10px;
  }

}
</style>
