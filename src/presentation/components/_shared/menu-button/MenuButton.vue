<script setup lang="ts">
import { ref } from "vue";
import { useKeyEvent } from "@/composables/useKeyEvent";
import MenuButtonItem from "./MenuButtonItem.vue";
import { RouterLink } from "vue-router";
import type { MenuButtonProps } from "./MenuButtonProps";

defineProps<{
  items: MenuButtonProps[];
}>();

const showItems = ref(false);

useKeyEvent("Escape", () => {
  showItems.value = false;
});
</script>

<template>
  <div class="ev-menu-button">
    <input v-model="showItems" type="checkbox" id="toggle" />

    <label for="toggle" class="label">
      <div class="trace"></div>
      <div class="trace"></div>
      <div class="trace"></div>
    </label>

    <nav
      @click="showItems = false"
      :class="[
        'd-flex align-center justify-center',
        'menu-itens',
        { hidden: !showItems },
      ]"
    >
      <ul>
        <MenuButtonItem v-for="(item, i) in items" :key="i">
          <RouterLink :to="item.to">{{ item.value }}</RouterLink>
        </MenuButtonItem>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss">
@import "@/presentation/assets/css/breakpoint.scss";

.ev-menu-button {
  display: none;

  .label {
    cursor: pointer;
    z-index: 9999;
    .trace {
      width: 1.8rem;
      height: 2px;
      background-color: var(--theme-dark-foreground);
      border-radius: 4px;
      transition: 0.5s;

      &:nth-child(1) {
        top: -6px;
        transform: rotate(0);
      }

      &:nth-child(2) {
        top: 0;
        transform: rotate(0);
      }

      &:nth-child(3) {
        top: 6px;
        transform: rotate(0);
      }
    }
  }

  #toggle {
    display: none;
    &:checked + .label {
      .trace {
        &:nth-child(1) {
          top: 2px;
          transform: rotate(45deg);
        }

        &:nth-child(2) {
          opacity: 0;
        }

        &:nth-child(3) {
          top: -2px;
          transform: rotate(-45deg);
        }
      }
    }
  }

  .menu-itens {
    background-color: black;
    top: 0;
    left: 0;
    position: fixed;
    width: 100%;
    height: 100%;
    opacity: 0.8;
    z-index: 2;
    transition: 0.5s;
    text-transform: uppercase;
    font-size: large;
  }

  .hidden {
    display: none;
    opacity: 0;
  }

  @media (max-width: $breakpoint-md) {
    display: flex !important;
  }
}
</style>
