'use client';
import React from 'react';
import {
  StyledAside,
  StyledAsideWrapper,
  StyledWrapper,
  StyledIconWrapper,
  HeaderTitle,
  StyledSpan,
  StyledSticky,
  StyledNewImg,
  StyledNewImgDoc,
  StyledNewImgOrange,
} from './Styled';
import MailSharpIcon from '@mui/icons-material/MailSharp';
import PhoneSharpIcon from '@mui/icons-material/PhoneSharp';
import ContactMailSharpIcon from '@mui/icons-material/ContactMailSharp';
import Link from 'next/link';
import { Footer } from '../Footer/Footer';

export const Aside = () => {
  return (
    <StyledAside>
      <StyledNewImgOrange />
      <StyledNewImg />
      <StyledNewImgDoc />
      <StyledSticky>
        <StyledAsideWrapper>
          <h2>available </h2>
          <StyledSpan>24/7</StyledSpan>
        </StyledAsideWrapper>

        <StyledIconWrapper>
          <div>
            <HeaderTitle />
          </div>
          <StyledWrapper>
            <MailSharpIcon style={{ marginRight: '8px' }} />
            <a href="mailTo:finance@lebiga.nl">finance@lebiga.nl</a>
          </StyledWrapper>
          <StyledWrapper>
            <PhoneSharpIcon style={{ marginRight: '8px' }} />
            <a href="tel:+31620876606">+31 (0) 6 20 87 66 06</a>
          </StyledWrapper>
          <StyledWrapper>
            <ContactMailSharpIcon style={{ marginRight: '8px' }} />
            <Link href="#contact">contact us</Link>
          </StyledWrapper>
        </StyledIconWrapper>
        <Footer />
      </StyledSticky>
    </StyledAside>
  );
};
