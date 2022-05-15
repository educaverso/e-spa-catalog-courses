<script setup lang="ts">
import icons from "@/components/icons";
import Logo from "./Logo.vue";
import Notifications from "./Notifications.vue";
import Search from "./Search.vue";
</script>

<template>
  <div class="ev-navbar">
    <div class="navigation">
      <Logo />
      <div class="items-menu">
        <a href="#">Início</a>
        <a href="#">Cursos</a>
        <a href="#">Trilhas</a>
        <a href="#">Bombando</a>
        <a href="#">Minha lista</a>
      </div>
    </div>

    <div class="navigation secondary-navigation">
      <Search />
      <Notifications />
      <a href="#"><icons name="face-man" /></a>
    </div>
  </div>
</template>

<style lang="scss">
.ev-navbar {
  background-color: #000;
  display: flex;
  align-items: center;
  height: 70px;
  justify-content: space-between;

  .navigation {
    display: flex;
    align-items: center;
    font-size: 1rem;
    gap: 10px;
    color: #fff;
  }

  .secondary-navigation {
    font-size: 1.8rem;
    gap: 10px;
    display: flex;
  }

  .items-menu {
    display: flex;
    gap: 10px;

    a:hover {
      color: #e08d4c;
      transition: 0.5s;
      text-shadow: 0 0 1px #e08d4c;
    }
  }
}
</style>
