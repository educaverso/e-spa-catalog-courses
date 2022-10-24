import { computed, onUnmounted, ref } from "vue";

enum Breakpoint {
  XS,
  SM,
  MD,
  LG,
  XL,
}

export function useWindow() {
  const width = ref(window.innerWidth);
  const height = ref(window.innerHeight);

  const isMobile = computed(() => width.value < 576);
  const isSm = computed(() => width.value > 0);
  const isMd = computed(() => width.value > 768);
  const isLg = computed(() => width.value > 992);
  const isXl = computed(() => width.value > 1200);

  const onResize = () => {
    width.value = window.innerWidth;
    height.value = window.innerHeight;
  };

  window.addEventListener("resize", onResize);

  onUnmounted(() => {
    window.removeEventListener("resize", onResize);
  });

  return {
    width,
    height,
    isMobile,
    isLg,
    isMd,
    isSm,
    isXl,
  };
}
