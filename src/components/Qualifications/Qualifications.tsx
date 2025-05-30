import React from 'react';
import {
  StyledHeader,
  StyledParagraph,
  StyledSpan,
  StyledSection,
  StyledItems,
} from './Styled';
import { useTranslation } from '@/hooks/useTranslation';
import { useResponsive } from '@/contexts/ResponsiveContext';

const itemsConfig: Record<string, string[]> = {
  en: [
    'Crafting accurate financial statements, profit & loss reports, and cash flow analyses.',
    'Conducting audits and ensuring cross-jurisdictional compliance.',
    'Implementing cutting-edge financial automation tools for efficiency.',
    'Spearheading budget planning and forecasting for multinational organizations.',
    'Advising companies on tax savings and financial strategies to maximize growth.',
    'Training and leading teams of finance professionals to achieve excellence.',
  ],
  uk: [
    'Створюю точні фінансові звіти, звіти про прибуток і збитки та аналіз грошових потоків.',
    'Проводив аудити та забезпечув міждержавну відповідність.',
    'Впроваджую сучасні автоматизовані фінансові інструменти для ефективності.',
    'Створюю бюджети та прогнози для міжнародних організацій.',
    'Надаю консультації щодо податкових знижень та фінансових стратегій для максимального зростання.',
    'Навчаю та керувати командами фінансових професіоналів для досягнення найвищих стандартів.',
  ],
  nl: [
    'Accurate financiële verklaringen, winst- en verliesrekeningen en cashflowanalyse.',
    'Audit uitvoeren en cross-jurisdictiональne compliance garanderen.',
    'Implementeren van cutting-edge financiële automatiseringstools voor efficiëntie.',
    'Budgetplanning en forecasting voor multinational organisaties.',
    'Advies geven over belastingbesparingen en financiële strategieën voor maximale groei.',
    'Trainen en leiden van teams financiële professionals voor prestatie.',
  ],
  ru: [
    'Создание точных финансовых отчетов, отчетов о прибылях и убытках и анализа денежных потоков.',
    'Проведение аудитов и обеспечение межгосударственной соответствия.',
    'Внедрение современных автоматизированных финансовых инструментов для эффективности.',
    'Планирование бюджетов и прогнозирование для международных организаций.',
    'Предоставление консультаций по налоговым льготам и финансовым стратегиям для максимального роста.',
    'Обучение и руководство командами финансовых профессионалов для достижения высоких стандартов.',
  ],
};

export const Qualifications = () => {
  const { t } = useTranslation();
  const items = t('qualifications.items');
  const itemConfig = itemsConfig[items];
  const { isMobile } = useResponsive();
  return (
    <StyledSection isMobile={isMobile} id="qualifications">
      <article>
        <StyledHeader>{t('qualifications.title')}</StyledHeader>
        <StyledParagraph>{t('qualifications.descriptionOne')}</StyledParagraph>
        <StyledParagraph>{t('qualifications.descriptionTwo')}</StyledParagraph>
        <StyledParagraph>
          <StyledSpan>{t('qualifications.spanOne')}</StyledSpan>{' '}
          {t('qualifications.descriptionThree')}
        </StyledParagraph>
        <StyledParagraph>
          <StyledSpan>{t('qualifications.spanTwo')}</StyledSpan>{' '}
          {t('qualifications.descriptionFour')}
        </StyledParagraph>
        <StyledParagraph>
          <StyledSpan>{t('qualifications.spanThree')}</StyledSpan>{' '}
          {t('qualifications.descriptionFive')}
        </StyledParagraph>
        <StyledParagraph>{t('qualifications.descriptionSix')}</StyledParagraph>
        <ul>
          {itemConfig?.map((item) => (
            <StyledItems key={item}>{item}</StyledItems>
          ))}
        </ul>
      </article>
    </StyledSection>
  );
};
