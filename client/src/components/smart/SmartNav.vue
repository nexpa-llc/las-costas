<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useWindowScroll, useWindowSize } from '@vueuse/core';
import SmartTransition from '@/components/smart/SmartTransition.vue';
import LocaleSelector from '@/components/LocaleSelector.vue';
import SmartSvg from './SmartSvg.vue';
import { useSmartLinks } from '@/composables/smart-links';

const { t } = useI18n({ useScope: 'global' });

const showOffCanvas = ref(false);
const route = useRoute();

const { socialLinks, routeLinks } = useSmartLinks();
const { width: windowWidth } = useWindowSize();
const { y: scrollY } = useWindowScroll();

watch(windowWidth, () => {
  if (windowWidth.value >= 1024) {
    showOffCanvas.value = false;
  }
});

watch(route, () => {
  showOffCanvas.value = false;
});

watch(showOffCanvas, (value) => {
  document.body.style.overflow = value ? 'hidden' : 'visible';
});
</script>
<template>
  <div>
    <div
      class="bg-base-100/75 sticky inset-x-0 top-0 z-40 mx-auto flex h-[64px] content-center items-center justify-between px-4 pt-2 backdrop-blur-sm transition-all"
      :class="{ 'shadow-md': scrollY > 0 }"
    >
      <RouterLink to="/">
        <img src="/assets/logo.png" alt="logo" class="w-22 lg:w-26" />
      </RouterLink>

      <button type="button" @click="showOffCanvas = !showOffCanvas">
        <SmartTransition mode="out-in">
          <SmartSvg v-if="showOffCanvas" src="x" class="text-4xl" />
          <SmartSvg v-else src="bars" class="text-4xl" />
        </SmartTransition>
      </button>
    </div>

    <Teleport to="body">
      <SmartTransition name="slide-from-right">
        <div
          v-if="showOffCanvas"
          class="bg-base-100/80 fixed top-[60px] bottom-0 left-0 z-40 h-screen w-screen overflow-scroll backdrop-blur-sm"
        >
          <div class="mt-12 flex flex-col items-center gap-9 text-center font-semibold">
            <RouterLink
              v-for="link in routeLinks"
              :key="link.name"
              :to="link.to"
              class="hover:text-primary text-3xl"
              active-class="text-primary underline underline-offset-2"
            >
              {{ link.name }}
            </RouterLink>

            <div class="flex justify-center gap-6 text-3xl">
              <a
                v-for="link in socialLinks"
                :key="link.name"
                :href="link.url"
                target="_blank"
              >
                <SmartSvg :src="link.icon" />
              </a>
            </div>
            <a href="tel:9495031324" class="btn btn-primary btn-lg mb-3 text-3xl">
              {{ t('link.call') }}
            </a>
            <LocaleSelector class="-ms-1 text-xl" />
          </div>
        </div>
      </SmartTransition>
    </Teleport>
  </div>
</template>

<style lang="scss" scoped>
a {
  transition: all 150ms linear;
}

a:hover {
  color: #71706a;
}
</style>
