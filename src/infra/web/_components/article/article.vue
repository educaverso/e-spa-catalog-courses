<script setup lang="ts">
import type { PropType } from "vue";
import type { TextContent } from "../course/modules/ModuleItem.vue";

defineProps({
  lesson: { type: Object as PropType<TextContent>, required: true },
});
</script>

<template>
  <p>{{ lesson.content }}</p>
</template>
