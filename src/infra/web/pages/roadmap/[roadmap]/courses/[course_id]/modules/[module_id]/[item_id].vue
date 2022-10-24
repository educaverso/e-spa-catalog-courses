<script setup lang="ts">
import { onMounted, ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import Youtube from "@/infra/web/_components/_shared/youtube/Youtube.vue";
import Article from "@/infra/web/_components/article/article.vue";
import type { ModuleContent } from "@/infra/web/_components/course/modules/ModuleItem.vue";

const route = useRoute();

const mock = new Map<string, ModuleContent>([
  [
    "introducao-a-programacao",
    {
      to: "introducao-a-programacao",
      title: "introdução à programação",
      duration: "10:23",
      done: false,
      type: "video",
      uri: "ETLmI_hS8HU",
    },
  ],
  [
    "variaveis-e-tipos",
    {
      to: "variaveis-e-tipos",
      title: "Variáveis e tipos",
      duration: "07:00",
      done: false,
      type: "video",
      uri: "ETLmI_hS8HU",
    },
  ],
  [
    "operadores-logicos",
    {
      to: "operadores-logicos",
      title: "Operadores lógicos",
      done: false,
      type: "text",
      content: "lorem",
    },
  ],
]);

async function getItem(to: string) {
  return mock.get(to);
}

const item = ref<ModuleContent>();

watchEffect(async () => {
  item.value = await getItem(route.params.item_id as string);
});
</script>

<template>
  <template v-if="item">
    <Youtube v-if="item.type === 'video'" :item="item"></Youtube>
    <Article v-else-if="item.type === 'text'" :item="item"></Article>
  </template>
  <div v-else>
    <h1>Não existe</h1>
  </div>
</template>
