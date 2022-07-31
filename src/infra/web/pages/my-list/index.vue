<script setup lang="ts">
import CreateRoomStory from '@/application/chat/room/CreateRoomStory';
import { eventDispatcher } from '@/infra/dispachers/EventEmitterDispacher';

const handler = (e: Event) => console.log('handler' + e);

eventDispatcher.subscribe("room.created", handler);

const story = new CreateRoomStory(eventDispatcher);

story.execute({
  name: "IFCE",
  description: "grupo de estudantes do IFCE"
}).then(() => {
  console.log("done");
})

</script>

<template>
  <div class="ev-my-list">
    <h1>This is an MY LIST page</h1>
  </div>
</template>

<style>
</style>
