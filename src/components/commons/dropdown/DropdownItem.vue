<script setup lang="ts"></script>

<template>
  <li class="ev-dropdown-item">
    <slot class="icon" name="icon"></slot>
    <slot></slot>
  </li>
</template>

<style lang="scss">
.ev-dropdown-item {
  padding: 5px 10px 5px 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;

  .icon {
    font-size: 1.6rem;
    color: var(--color-foreground);
  }

  &:hover {
    color: var(--color-primary);
    text-shadow: 0 0 1px var(--color-primary);
  }
}
</style>
