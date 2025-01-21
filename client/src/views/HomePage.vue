<script setup>
import { smartFetch } from '@/assets/js/smart-fetch';
import { onMounted, ref } from 'vue';

const message = ref('');

async function fetchApi() {
  const res = await smartFetch({
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
  <div class="flex flex-col items-center justify-center gap-5">
    <span>LAS COSTAS</span>
    <span v-if="message">API MESSAGE: {{ message }}</span>
  </div>
</template>
