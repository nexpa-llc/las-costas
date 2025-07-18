<script setup>
import { useI18n } from 'vue-i18n';
import SmartSvg from './SmartSvg.vue';
import { SOCIAL_LINKS } from '@/assets/constants/links';

const year = new Date().getFullYear();
const { t } = useI18n({ useScope: 'global' });
</script>

<template>
  <footer>
    <hr class="my-16" />

    <div
      class="mx-auto mb-20 grid max-w-7xl grid-cols-2 gap-3 gap-y-10 px-6 text-sm sm:text-base"
    >
      <div class="flex flex-col gap-3">
        <h5 class="mb-3 font-semibold">{{ t('footer.navigation') }}</h5>
        <div class="flex flex-col items-start gap-1">
          <RouterLink
            to="/"
            class="hover:text-primary"
            active-class="text-primary underline underline-offset-2"
          >
            {{ t('link.home') }}
          </RouterLink>

          <a href="https://las-costas.square.site" class="hover:text-primary">
            {{ t('link.menu') }}
          </a>

          <a href="tel:9495031324" class="cursor-pointer">Catering</a>
        </div>
      </div>

      <div class="flex flex-col gap-3">
        <h5 class="mb-3 font-semibold">{{ t('footer.information') }}</h5>

        <div class="flex flex-col items-start gap-1">
          <a href="tel:9495031324" class="cursor-pointer">(949) 503-1324</a>
          <a href="tel:9495031324" class="cursor-pointer">{{ t('footer.careers') }}</a>
          <a href="tel:9495031324" class="cursor-pointer">Catering</a>
        </div>
      </div>

      <div class="flex flex-col gap-3">
        <h5 class="mb-3 font-semibold">Las Costas</h5>
        <div class="flex gap-4 text-base">
          <a
            v-for="link in SOCIAL_LINKS"
            :key="link.name"
            :href="link.url"
            target="_blank"
          >
            <SmartSvg :src="link.icon" />
          </a>
        </div>
        <!-- Had to do it this way not sure why -->
        <div class="flex grow items-end text-xs sm:w-4/5">
          <p>
            Copyright ©
            <span>{{ year }}</span>
            by Las Costas. All rights reserved.
          </p>
        </div>
      </div>

      <div class="flex flex-col gap-3">
        <h5 class="mb-3 font-semibold">{{ t('footer.business_hours') }}</h5>
        <p class="sm:w-4/5">31401 Camino Capistrano #3, San Juan Capistrano, CA 92675</p>
        <div>
          <p>{{ t('footer.schedule') }}</p>
        </div>
      </div>
    </div>
  </footer>
</template>
