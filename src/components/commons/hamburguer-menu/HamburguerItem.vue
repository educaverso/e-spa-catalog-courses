<script setup lang="ts"></script>

<template>
  <li class="ev-hamburguer-item">
    <slot></slot>
  </li>
</template>

<style lang="scss">
@import "@/assets/css/breakpoint.scss";

.ev-hamburguer-menu {
  text-transform: uppercase;
  letter-spacing: 4px;
}
</style>
