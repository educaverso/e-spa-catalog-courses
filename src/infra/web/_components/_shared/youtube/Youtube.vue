<script setup lang="ts">
import { onMounted, ref, toRefs, watchEffect } from "vue";
import { useYoutube } from "./useYoutube";

const props = defineProps({
  videoId: { type: String, required: true },
  volume: { type: Number, default: 100 },
});

const el = ref<HTMLElement>();

// const reactiveProps = toRefs(props);

const { changeVideo } = useYoutube(el, {
  playerVars: {
    modestbranding: 1,
    color: "white",
    iv_load_policy: 3,
    widget_referrer: "https://educaverso.app",
    disablekb: 1,
    showinfo: 0,
    rel: 0,
  } as any,
});

watchEffect(() => {
  changeVideo(props.videoId);
});
</script>

<template>
  <div ref="el" class="ev-youtube"></div>
</template>

<style></style>
