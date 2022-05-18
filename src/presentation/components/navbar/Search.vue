<script setup lang="ts">
import icons from "@/presentation/components/commons/icons";
import { ref } from "vue";

const isOpenSearch = ref(false);
const query = ref("");

const openSearch = () => {
  isOpenSearch.value = true;
};

const closeSearch = () => {
  isOpenSearch.value = false;
};
</script>

<template>
  <label class="ev-search">
    <div :class="['input-icons', { 'open-search': isOpenSearch || query }]">
      <icons name="magnify" />
      <input
        v-model="query"
        type="text"
        placeholder="Cursos, roteiros ou categorias"
        class="input-field"
        @focus="openSearch()"
        @blur="closeSearch()"
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
    display: inline-flex;
    padding: 0;
    width: 0;
    color: var(--color-foreground);
    background-color: transparent;
    box-shadow: none;
    outline: none;
    border: none;
    transition: 0.5s;
    font: inherit;
    font-size: 1.1rem;
  }

  .open-search {
    background-color: #1f1f1f;
    padding: 5px;
    border-radius: 1em;
    height: 2.8rem;
    .input-field {
      width: 250px;
    }
  }
}
</style>
