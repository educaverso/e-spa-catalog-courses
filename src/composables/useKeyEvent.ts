import { onUnmounted } from "vue";
import { useEvent } from "./useEvent";

export function useKeyEvent(
  key: string,
  callback: (e: KeyboardEvent) => void,
  eventName = "keyup"
) {
  return useEvent(document, eventName, (e: KeyboardEvent) => {
    if (e.key === key) {
      callback(e);
    }
  });
}
