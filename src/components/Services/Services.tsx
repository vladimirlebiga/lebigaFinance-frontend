import React from 'react';
import { StyledParagraph, StyledServices } from './Styled';

const servicesConfig: string[] = [
  'Company registration & setup (ZZP, BV, Holding, Stichting)',
  'Tax returns - personal & business',
  'Accounting & bookkeeping',
  'Financial planning & tax optimization',
  'Loans & business credit applications',
  'Legal & contract support',
];
export const Services = () => {
  return (
    <section id="home">
      <ul>
        {servicesConfig.map((service) => (
          <StyledServices key={service}>{service}</StyledServices>
        ))}
      </ul>
      <StyledParagraph>
        We speak your language and take care of everything—so you don't have to!
        Enjoy a simple, stress-free financial experience with experts who ensure
        you get every possible benefit.
      </StyledParagraph>
      <StyledParagraph>
        Call us today for a free consultation and let us handle the rest!
      </StyledParagraph>
    </section>
  );
};
