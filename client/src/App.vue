<script setup>
import { RouterView, useRoute } from 'vue-router';
import { computed } from 'vue';
import DefaultLayout from './layouts/DefaultLayout.vue';
import SmartTransition from './components/smart/SmartTransition.vue';

const route = useRoute();
const layoutComponent = computed(() => route.meta.layout || DefaultLayout);
</script>

<template>
  <div>
    <SmartTransition name="fade" mode="out-in">
      <component :is="layoutComponent">
        <RouterView v-slot="{ Component }" class="router-view">
          <component :is="Component" />
        </RouterView>
      </component>
    </SmartTransition>
  </div>
</template>

<style lang="scss" scoped>
.router-view {
  min-height: calc(100vh - 460px);
}
</style>
