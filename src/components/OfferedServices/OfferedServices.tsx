import React from 'react';
import {
  StyledParagraph,
  StyledText,
  StyledHeader,
  StyledSection,
} from './Styled';

export const OfferedServices = () => {
  return (
    <StyledSection id="services">
      <article>
        <StyledHeader>Offered Services</StyledHeader>
        <StyledText> Company Registration & Setup:</StyledText>
        <StyledParagraph>
          Get your business (ZZP, BV, Holding) up and running smoothly with
          expert guidance.
        </StyledParagraph>
        <StyledText>Tax Returns & Optimization:</StyledText>
        <StyledParagraph>
          Personal and business taxes done right, with maximum deductions!
        </StyledParagraph>
        <StyledText>Accounting & Bookkeeping:</StyledText>
        <StyledParagraph>
          Flawless financial records, invoicing, and reporting.
        </StyledParagraph>
        <StyledText>Financial Planning & Advisory:</StyledText>
        <StyledParagraph>
          Gain control of your finances with budgeting, forecasting, and
          strategic advice.
        </StyledParagraph>
        <StyledText>Business Credit & Loans:</StyledText>
        <StyledParagraph>
          Secure funding with polished loan applications and credit strategies.
        </StyledParagraph>
        <StyledText>Legal & Contract Support:</StyledText>
        <StyledParagraph>
          Navigate contracts and financial agreements with confidence.
        </StyledParagraph>
      </article>
    </StyledSection>
  );
};
