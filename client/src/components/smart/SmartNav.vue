<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import SmartTransition from '@/components/smart/SmartTransition.vue';
import LocaleSelector from '@/components/LocaleSelector.vue';
import SmartSvg from './SmartSvg.vue';
import { SOCIAL_LINKS } from '@/assets/constants/links';

const NAV_LINKS = [
  {
    to: '/#combos',
    name: 'Combinations',
  },
  {
    to: '/#mariscos',
    name: 'Mariscos',
  },
  {
    to: '/#tacos',
    name: 'Tacos',
  },
  {
    to: '/#caldos',
    name: 'Caldos',
  },
  {
    to: '/#antojitos',
    name: 'Antojitos Mexicanos',
  },
  {
    to: '/#platillos',
    name: 'Platillos',
  },
  {
    to: '/#burritos',
    name: 'Burritos',
  },
  {
    to: '/#tortas',
    name: 'Tortas',
  },
  {
    to: '/#ensalada',
    name: 'Ensalada',
  },
  {
    to: '/#ninos',
    name: 'Niños',
  },
  {
    to: '/#desayunos',
    name: 'Desayunos',
  },
  {
    to: '/#postres',
    name: 'Postres',
  },
  {
    to: '/#drinks',
    name: 'Drinks',
  },
];

const { t } = useI18n({ useScope: 'global' });

const showOffCanvas = ref(false);
const route = useRoute();

watch(route, () => {
  showOffCanvas.value = false;
});

watch(showOffCanvas, (value) => {
  document.body.style.overflow = value ? 'hidden' : 'visible';
});
</script>
<template>
  <div class="relative">
    <div
      class="bg-base-100/75 mx-auto flex h-[64px] content-center items-center justify-between px-4 pt-2 backdrop-blur-sm transition-all"
    >
      <RouterLink to="/">
        <img src="/assets/logo.png" alt="logo" class="w-22 lg:w-26" />
      </RouterLink>

      <button type="button" @click="showOffCanvas = !showOffCanvas">
        <SmartTransition mode="out-in" duration="150">
          <SmartSvg v-if="showOffCanvas" src="x" class="text-4xl" />
          <SmartSvg v-else src="bars" class="text-4xl" />
        </SmartTransition>
      </button>
    </div>

    <SmartTransition name="slide-from-right">
      <div
        v-if="showOffCanvas"
        class="bg-base-100/80 absolute top-[64px] bottom-0 left-0 z-40 h-svh w-full overflow-scroll pb-24 backdrop-blur-sm"
      >
        <div class="mt-8 flex flex-col items-center gap-4 text-center font-semibold">
          <RouterLink
            v-for="link in NAV_LINKS"
            :key="link.name"
            :to="link.to"
            class="hover:text-primary text-xl underline"
          >
            {{ link.name }}
          </RouterLink>

          <div class="flex justify-center gap-6 text-xl">
            <a
              v-for="link in SOCIAL_LINKS"
              :key="link.name"
              :href="link.url"
              target="_blank"
            >
              <SmartSvg :src="link.icon" />
            </a>
          </div>

          <a href="tel:9495031324" class="btn btn-primary mb-3 text-xl">
            {{ t('link.call') }}
          </a>

          <LocaleSelector class="-ms-1 text-xl" />
        </div>
      </div>
    </SmartTransition>
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
