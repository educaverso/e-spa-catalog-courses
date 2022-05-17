<script setup lang="ts">
export interface DropdownProps {
  right: Boolean;
}

defineProps<DropdownProps>();
</script>

<template>
  <div class="ev-dropdown">
    <div class="action"><slot></slot></div>

    <ul :class="['menu', right ? 'right' : 'left']">
      <slot name="items"></slot>
    </ul>
  </div>
</template>

<style lang="scss">
.ev-dropdown {
  display: inline-block;
  z-index: 1;
  transition: 0.5s;

  .action {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    gap: 5px;
  }

  .menu {
    position: absolute;
    font-size: 1rem;
    padding: 5px 0;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.1);
    background-color: rgba(0, 0, 0, 0.7);
    white-space: nowrap;
    display: none;
  }

  @mixin arrow {
    content: "";
    top: -5px;
    position: absolute;
    border-width: 5px 5px 0 5px;
    border-style: solid;
    border-color: var(--color-foreground) transparent;
    transform: rotate(180deg);
  }

  .right {
    right: 10px;

    &:after {
      @include arrow;
      right: 8px;
    }
  }

  .left {
    &:after {
      @include arrow;
      left: 8px;
    }
  }

  &:hover .menu {
    display: flex;
    flex-direction: column;
  }
}
</style>
