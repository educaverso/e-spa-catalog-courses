<script setup lang="ts">
import icons from "@/components/icons";
</script>

<template>
  <a href="#" class="ev-pulse"><icons name="bell-ring-outline" /></a>
</template>

<style lang="scss">
.ev-pulse {
  border-radius: 50%;
  cursor: pointer;
  color: rgba(224, 141, 76, 1);
  box-shadow: 0 0 0 0 rgba(224, 141, 76, 1);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(224, 141, 76, 1);
  }

  70% {
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
}
</style>
