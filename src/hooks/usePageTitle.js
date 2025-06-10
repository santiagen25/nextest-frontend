import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const usePageTitle = (titleKey) => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `Nextest - ${t(titleKey)}`;
  }, [titleKey, t]);
};
