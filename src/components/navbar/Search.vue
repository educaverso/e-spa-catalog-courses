<script setup lang="ts">
import icons from "@/components/icons";
import { ref } from "vue";

const isToggle = ref(false);
const query = ref("");
</script>

<template>
  <label class="ev-search">
    <div :class="['input-icons', { toggle: isToggle || query }]">
      <icons name="magnify" />
      <input
        v-model="query"
        type="text"
        placeholder="Cursos, trilhas, categorias"
        class="input-field"
        @focus="isToggle = true"
        @blur="isToggle = false"
      />
    </div>
  </label>
</template>

<style lang="scss">
.ev-search {
  .input-icons {
    display: flex;
    align-items: center;
  }

  .icon {
    cursor: pointer;
  }

  .input-field {
    display: block;
    padding: 0;
    width: 0;
    color: #fff;
    background-color: transparent;
    box-shadow: none;
    outline: none;
    border: none;
    transition: 0.5s;
    font-size: 1.2rem;
  }

  .toggle {
    box-shadow: 0 0 0 2px #fff;
    padding: 5px 10px 5px 10px;
    border-radius: 10px;
    .input-field {
      width: 250px;
    }
  }
}
</style>
