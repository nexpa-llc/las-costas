import { useI18n } from 'vue-i18n';

export function useSmartLinks() {
  const { t } = useI18n({ useScope: 'global' });

  const routeLinks = [
    {
      name: t('link.home'),
      to: '/',
    },
    {
      name: t('link.menu'),
      to: '/menu',
    },
    {
      name: 'Blog',
      to: '/blog',
    },
    {
      name: t('link.contact'),
      to: '/contact',
    },
  ];

  const socialLinks = [
    {
      url: '/',
      name: 'Facebook',
      icon: 'facebook',
    },
    {
      url: '/',
      name: 'Instagram',
      icon: 'instagram',
    },
    {
      url: 'https://g.co/kgs/RLrZmyw',
      name: 'Google',
      icon: 'google',
    },
  ];

  return {
    socialLinks,
    routeLinks,
  };
}
