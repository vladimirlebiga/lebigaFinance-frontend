import React from 'react';
import { StyledParagraph, StyledServices, StyledSection } from './Styled';
import { useTranslation } from '@/hooks/useTranslation';
import { useResponsive } from '@/contexts/ResponsiveContext';

const servicesConfig: Record<string, string[]> = {
  en: [
    'Company registration & setup (ZZP, BV, Holding, Stichting)',
    'Tax returns - personal & business',
    'Accounting & bookkeeping',
    'Financial planning & tax optimization',
    'Loans & business credit applications',
    'Legal & contract support',
  ],
  nl: [
    'Bedrijfsopzet (ZZP, BV, Holding, Stichting)',
    'Belastingaangifte - persoonlijk & zakelijk',
    'Boekhouding & boekhouden',
    'Financieel plan & belastingoptimalisatie',
    'Leningen & zakelijke kredietaanvragen',
    'Juridische & contractondersteuning',
  ],
  uk: [
    'Реєстрація та налаштування компанії (ZZP, BV, Holding, Stichting)',
    'Податкова декларація - особиста та бізнес',
    'Бухгалтерський облік та облік',
    'Фінансове планування та оптимізація податків',
    'Кредити та кредитні заявки для бізнесу',
    'Юридична та договірна підтримка',
  ],
  ru: [
    'Регистрация и настройка компании (ZZP, BV, Holding, Stichting)',
    'Налоговая декларация - персональная и бизнес',
    'Бухгалтерский учет и учет',
    'Финансовое планирование и оптимизация налогов',
    'Кредиты и кредитные заявки для бизнеса',
    'Юридическая и договорная поддержка',
  ],
};
export const Services = () => {
  const { t } = useTranslation();
  const services = t('services.services');
  const serviceConfig = servicesConfig[services];
  const { isMobile } = useResponsive();
  return (
    <StyledSection isMobile={isMobile}>
      <ul>
        {serviceConfig?.map((service) => (
          <StyledServices key={service}>{service}</StyledServices>
        ))}
      </ul>
      <StyledParagraph isMobile={isMobile}>
        {t('services.intro')}
      </StyledParagraph>
      <StyledParagraph isMobile={isMobile}>
        {t('services.callToAction')}
      </StyledParagraph>
    </StyledSection>
  );
};
