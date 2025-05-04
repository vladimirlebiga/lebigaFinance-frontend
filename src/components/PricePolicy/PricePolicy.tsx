import React from 'react';
import { StyledParagraph, StyledHeader, StyledSection } from './Styled';

export const PricePolicy = () => {
  return (
    <StyledSection id="price-policy">
      <article>
        <StyledHeader>Price Policy</StyledHeader>
        <StyledParagraph>
          First 15 MIN. - FREE consultation. We believe in transparency. That's
          why your first 15-minute consultation is completely free—no
          commitment, just answers.
        </StyledParagraph>
        <StyledParagraph>
          Standard rate - €60 per hour (ex. BTW). Our services, including
          financial estimations, planning, and advisory support, are billed at
          €60 per hour (excluding VAT).
        </StyledParagraph>
        <StyledParagraph>
          Payment terms - 50/50 split. 50% - Based on a preliminary estimate
          before we start. 50% after completion - The remaining balance is paid
          once all work is done.
        </StyledParagraph>
        <StyledParagraph>
          Transparent time tracking. Every week, you will receive a detailed
          report with:
        </StyledParagraph>
        <ul>
          <li>Time spent on your project</li>
          <li>Remaining prepaid hours</li>
        </ul>
        <StyledParagraph>
          Please feel free to contact us for a preliminary estimation based on a
          rate of €60 per hour or a fixed price, which will be determined based
          on the project scope.
        </StyledParagraph>
      </article>
    </StyledSection>
  );
};
