<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <RouterLink class="d-flex align-center ev-logo" to="/">
    <img class="logo" src="@/infra/web/_assets/img/logo.svg" alt="Logomarca" />
    <img height="25" class="brand" src="@/infra/web/_assets/img/brand.svg" alt="Logomarca" />
  </RouterLink>
</template>

<style lang="scss">
@import "@/infra/web/_assets/css/breakpoint.scss";

.ev-logo {
  .brand {
    display: none;
  }

  @media (max-width: $breakpoint-md) {
    .logo {
      display: none !important;
    }

    .brand {
      display: block;
    }
  }
}
</style>
