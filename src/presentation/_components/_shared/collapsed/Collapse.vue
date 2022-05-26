<script setup lang="ts">
import { ref, toRef, watch } from "vue";
import HeightTransition from "../transitions/HeightTransition.vue";

export interface CollapseInterface {
  modelValue?: boolean;
}

const props = defineProps<CollapseInterface>();

const emit = defineEmits<{
  (event: "update:modelValue", value: boolean): void;
}>();

const modelValue = toRef(props, "modelValue");

const isVisible = ref(props.modelValue);

watch(modelValue, (value) => {
  isVisible.value = value;
});

const setVisible = (value: boolean) => {
  isVisible.value = value;
  emit("update:modelValue", value);
};

const open = () => {
  setVisible(true);
};

const close = () => {
  setVisible(false);
};

const toggle = () => {
  setVisible(!isVisible.value);
};
</script>

<template>
  <div>
    <slot
      name="activator"
      v-bind="{ open, close, toggle, on: { click: toggle } }"
    ></slot>

    <HeightTransition>
      <div v-if="isVisible">
        <slot></slot>
      </div>
    </HeightTransition>
  </div>
</template>
