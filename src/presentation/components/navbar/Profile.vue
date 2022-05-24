<script setup lang="ts">
import icons from "@/presentation/components/_shared/icons";
import Dropdown from "../_shared/dropdown/index.vue";
import Divider from "../_shared/dropdown/Divider.vue";
import DropdownItem from "../_shared/dropdown/DropdownItem.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <Dropdown class="ev-profile" :right="true">
    <div class="align-center icon">
      <icons name="face-man" /><icons class="arrow" name="menu-down" />
    </div>

    <template #items>
      <DropdownItem>
        <template #icon>
          <icons name="account" />
        </template>
        <RouterLink to="">Conta</RouterLink>
      </DropdownItem>

      <Divider />

      <DropdownItem>
        <template #icon>
          <icons name="logout" />
        </template>
        <RouterLink to="">Sair da educaverso</RouterLink>
      </DropdownItem>
    </template>
  </Dropdown>
</template>

<style lang="scss">
.ev-profile {
  font-size: 1.618rem;
  .icon {
    display: inline-flex;
  }

  .arrow {
    font-size: 0.7em;
  }
}
</style>
