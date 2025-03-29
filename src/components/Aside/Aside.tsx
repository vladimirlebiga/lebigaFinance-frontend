'use client';
import React from 'react';
import {
  StyledAside,
  StyledAsideWrapper,
  StyledWrapper,
  StyledIconWrapper,
  HeaderTitle,
} from './Styled';
import MailSharpIcon from '@mui/icons-material/MailSharp';
import PhoneSharpIcon from '@mui/icons-material/PhoneSharp';
import ContactMailSharpIcon from '@mui/icons-material/ContactMailSharp';

export const Aside = () => {
  return (
    <StyledAside>
      <StyledAsideWrapper>
        <h2>available 24/7</h2>
      </StyledAsideWrapper>

      <StyledIconWrapper>
        <div>
          <HeaderTitle />
          {/* LEBIGA <StyledSpan>FINANCE</StyledSpan> */}
        </div>
        <StyledWrapper>
          <MailSharpIcon style={{ marginRight: '8px' }} />
          <span>finance@lebiga.nl</span>
        </StyledWrapper>
        <StyledWrapper>
          <PhoneSharpIcon style={{ marginRight: '8px' }} />
          <span>+31 (0) 6 20 87 66 06</span>
        </StyledWrapper>
        <StyledWrapper>
          <ContactMailSharpIcon style={{ marginRight: '8px' }} />
          <span>contact us</span>
        </StyledWrapper>
      </StyledIconWrapper>
    </StyledAside>
  );
};
