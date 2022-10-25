<script setup lang="ts">
import icons from "@/infra/web/_components/_shared/icons";
import { RouterLink } from "vue-router";
import { computed } from "vue";

export interface Content {
  to: string;
  title: string;
  done: boolean;
}

export interface VideoContent extends Content {
  type: "video";
  duration: string;
  uri: string;
}

export interface TextContent extends Content {
  type: "text";
  content: string;
}
export interface ChallengeContent extends Content {
  type: "challenge";
  content: string;
}

export type ModuleContent = VideoContent | TextContent | ChallengeContent;

const props = defineProps<{
  lesson: ModuleContent;
}>();
const icon = computed(() => {
  if (props.lesson.type === "text") {
    return "format-text";
  }
  if (props.lesson.type === "video") {
    return "movie-open-play-outline";
  }
  if (props.lesson.type === "challenge") {
    return "help";
  }
  return "";
});
</script>

<template>
  <RouterLink :to="lesson.to">
    <div class="d-flex align-center justify-space-between ev-item-module">
      <div class="d-flex align-center gap-2">
        <icons
          :class="[lesson.done ? 'ev-item-module--done' : 'ev-item-module__icon']"
          :name="icon"
        />
        <span>{{ lesson.title }}</span>
      </div>
      <div class="d-flex align-center gap-4">
        <span v-if="lesson.type === 'video'" class="ev-item-module__time">{{
          lesson.duration
        }}</span>
      </div>
    </div>
  </RouterLink>
</template>

<style lang="scss">
.ev-item-module {
  font-weight: 300;

  &__icon {
    color: var(--theme-dark-label);
  }

  &--done {
    color: var(--theme-dark-success);
  }

  &__time {
    font-size: x-small;
    color: var(--theme-dark-label);
  }
}
</style>
