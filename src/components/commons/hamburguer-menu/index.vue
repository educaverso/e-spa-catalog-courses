<script setup lang="ts">
import { ref } from "vue";
import { useKeyEvent } from "@/composables/useKeyEvent";

const showItems = ref(false);

useKeyEvent("Escape", () => {
  showItems.value = false;
});
</script>

<template>
  <div class="ev-hamburguer-menu">
    <div class="checkbox-container">
      <div class="checkbox-wraper">
        <input v-model="showItems" type="checkbox" id="toggle" />

        <label for="toggle" class="checkbox">
          <div class="trace"></div>
          <div class="trace"></div>
          <div class="trace"></div>
        </label>

        <nav
          @click="showItems = false"
          :class="['menu-itens', { hidden: !showItems }]"
        >
          <ul>
            <li>
              <a href="#">OK</a>
            </li>
            <li>
              <a href="#">Início</a>
            </li>
            <li>
              <a href="#">Cursos</a>
            </li>
            <li>
              <a href="#">Etc</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/css/breakpoint.scss";

.ev-hamburguer-menu {
  display: none;
  .checkbox-container {
    .checkbox {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      cursor: pointer;
      z-index: 9999;

      .trace {
        width: 1.8rem;
        height: 2px;
        background-color: var(--color-foreground);
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
  }

  #toggle {
    display: none;
    &:checked + .checkbox {
      .trace {
        &:nth-child(1) {
          top: 2px;
          transform: rotate(45deg);
        }

        &:nth-child(2) {
          transform: translate(800px);
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
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.8;
    z-index: 2;
    transition: 0.5s;

    ul li {
      text-transform: uppercase;
      letter-spacing: 4px;
    }
  }

  .hidden {
    visibility: hidden;
    opacity: 0;
  }

  @media (max-width: $breakpoint-sm) {
    display: flex;
  }
}
</style>
