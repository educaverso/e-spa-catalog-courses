import { trigger } from "@vue/reactivity";
import { customRef, onMounted, ref, unref, watch, type Ref } from "vue";
import youtubePlayer from "youtube-player";
import type { Options } from "youtube-player/dist/types";

type MaybeRef<T> = T | Ref<T>;

export function useYoutube(
  el: MaybeRef<HTMLElement | undefined>,
  options: Options
) {
  const player = ref<ReturnType<typeof youtubePlayer>>();
  // const volume = customRef((track, trigger) => );
  const volume = ref<number>(100);

  onMounted(() => {
    player.value = youtubePlayer(unref(el)!, options);
    player.value.setVolume(volume.value);
    player.value?.on("volumeChange", (e) => {
      
    });
  });

  watch(volume, (v) => {
    player.value?.setVolume(v);
  });

  return {
    volume,
    changeVideo(id: string) {
      player.value?.loadVideoById(id);
    },
    play() {
      return player.value?.playVideo();
    },
    pause() {
      return player.value?.pauseVideo();
    },
    stop() {
      return player.value?.stopVideo();
    },
  };
}
