import { onUnmounted } from "vue";

export function useEvent(
  target: any,
  event: string,
  callback: (event: any) => void
) {
  
  target.addEventListener(event, callback);

  const off = () => target.removeEventListener(event, callback);

  onUnmounted(off);

  return {
    off,
  };
}
