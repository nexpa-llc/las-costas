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
      url: 'https://www.facebook.com/profile.php?id=100082710796984',
      name: 'Facebook',
      icon: 'facebook',
    },
    {
      url: 'https://instagram.com/el_andariegotruck',
      name: 'Instagram',
      icon: 'instagram',
    },
    {
      url: 'https://g.page/r/CY53oo_JlDb8EAI/review',
      name: 'Google',
      icon: 'google',
    },
  ];

  return {
    socialLinks,
    routeLinks,
  };
}
