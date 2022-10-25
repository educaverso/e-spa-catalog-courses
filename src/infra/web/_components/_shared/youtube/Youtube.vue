<script setup lang="ts">
import { onMounted, ref, toRefs, watchEffect, PropType } from "vue";
import { useYoutube } from "./useYoutube";
import AspectRatio from "@/infra/web/_components/_shared/aspect-ratio/AspectRatio.vue";
import type { VideoContent } from "../../course/modules/ModuleItem.vue";

const props = defineProps({
  item: { type: Object as PropType<VideoContent>, required: true },
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
  changeVideo(props.item.uri);
});
</script>

<template>
  <AspectRatio :ratio="19 / 9">
    <div ref="el" class="ev-youtube"></div>
  </AspectRatio>
</template>

<style></style>
