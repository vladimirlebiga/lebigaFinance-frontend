'use client';
import React from 'react';
import { MyForm } from '../Form/Form';
import { Container } from '@mui/material';
import { Aside } from '../Aside/Aside';
import {
  StyledBox,
  StyledWrapper,
  StyledSection,
  StyledNewImgOne,
  StyledNewImgTwo,
  StyledLink,
  StyledIcon,
} from './Styled';
import { Header } from '../Header/Header';
import { Services } from '../Services/Services';
import { AboutUs } from '../AboutUs/AboutUs';
import { WhyUs } from '../WhyUs/WhyUs';
import { OfferedServices } from '../OfferedServices/OfferedServices';
import { Qualifications } from '../Qualifications/Qualifications';
import { PricePolicy } from '../PricePolicy/PricePolicy';
import { useResponsive } from '@/contexts/ResponsiveContext';
import { Contact } from '../Contact/Contact';
import { Footer } from '../Footer/Footer';

export const HomePage = () => {
  const { isMobile, screenWidth } = useResponsive();
  console.log(screenWidth);

  return (
    <div>
      <Container>
        <StyledWrapper isMobile={isMobile}>
          {!isMobile && <Aside />}
          <StyledBox id="home" isMobile={isMobile}>
            {screenWidth > 1200 && <StyledNewImgOne isMobile={isMobile} />}
            {screenWidth > 1200 && <StyledNewImgTwo isMobile={isMobile} />}
            <Header />
            <Services />
            <StyledSection isMobile={isMobile} />
            <AboutUs />
            <WhyUs />
            <OfferedServices />
            <Qualifications />
            <PricePolicy />
            {isMobile && <Contact />}
            <MyForm />
          </StyledBox>
          {!isMobile && (
            <StyledLink isMobile={isMobile} href="#home">
              <StyledIcon />
            </StyledLink>
          )}
          {isMobile && <Footer />}
        </StyledWrapper>
      </Container>
    </div>
  );
};
