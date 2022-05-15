<script setup lang="ts">
import icons from "@/components/icons";
</script>

<template>
  <div class="logo">
    <h2 class="yellow">
      <icons class="yellow" name="video" />Educa<span class="white">verso</span>
    </h2>
  </div>
</template>

<style>

.logo h2 {
  font-weight: bolder;
  font-size: 1.8rem;
}

.white {
  color: #fff;
  transition: 0.4s;
  font-weight: lighter;
}

.blue {
  text-decoration: none;
  color: #4dd0e1;
  transition: 0.4s;
}

.yellow {
  color: #e08d4c;
  transition: 0.4s;
}

</style>
