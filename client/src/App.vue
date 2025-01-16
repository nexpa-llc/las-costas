<script setup>
import { onMounted, ref } from 'vue';
import { useSmartFetch } from './composables/smart-fetch';

const message = ref('');

async function fetchApi() {
  const res = await useSmartFetch({
    method: 'GET',
    url: '/api/ping',
  });

  message.value = res.message;
}

onMounted(() => {
  fetchApi();
});
</script>

<template>
  <div class="flex h-svh flex-col items-center justify-center gap-5">
    <span> LAS COSTAS </span>
    <span v-if="message"> API MESSAGE: {{ message }} </span>
  </div>
</template>

<style lang="scss" scoped>
.router-view {
  min-height: calc(100vh - 460px);
}
</style>
