<script setup>
import { RouterView } from 'vue-router';
import SmartTransition from './components/smart/SmartTransition.vue';
import SmartFooter from './components/smart/SmartFooter.vue';
import SmartNav from './components/smart/SmartNav.vue';
</script>

<template>
  <div>
    <SmartNav />

    <RouterView v-slot="{ Component }" class="router-view">
      <SmartTransition name="fade" mode="out-in">
        <component :is="Component" />
      </SmartTransition>
    </RouterView>

    <SmartFooter />
  </div>
</template>

<style lang="scss" scoped>
.router-view {
  min-height: calc(100vh - 460px);
}
</style>
