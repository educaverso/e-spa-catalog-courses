<script setup lang="ts"></script>

<template>
  <li class="d-flex align-center pl-2 pr-2 pt-1 pb-1 ev-dropdown-item">
    <slot class="icon" name="icon"></slot>
    <slot></slot>
  </li>
</template>

<style lang="scss">
.ev-dropdown-item {
  cursor: pointer;
  gap: 10px;

  .icon {
    font-size: 1.6161rem;
    color: var(--theme-dark-foreground);
  }

  &:hover {
    color: var(--theme-dark-secondary);
  }
}
</style>
