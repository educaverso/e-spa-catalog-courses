<script setup lang="ts">
defineProps<{
  right: boolean;
}>();
</script>

<template>
  <div class="ev-dropdown">
    <div class="align-center action"><slot></slot></div>

    <ul :class="['items', right ? 'right' : 'left']">
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
    cursor: pointer;
  }

  .items {
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
    border-color: var(--theme-dark-foreground) transparent;
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

  &:hover .items {
    display: flex;
    flex-direction: column;
  }
}
</style>
