'use client';
import React from 'react';
import { MyForm } from '../Form/Form';
import { Container } from '@mui/material';
import { Aside } from '../Aside/Aside';
import { StyledBox, StyledNav, StyledWrapper } from './Styled';
import { Header } from '../Header/Header';
import { Services } from '../Services/Services';
import { AboutUs } from '../AboutUs/AboutUs';
import { WhyUs } from '../WhyUs/WhyUs';
import { OfferedServices } from '../OfferedServices/OfferedServices';
import { Qualifications } from '../Qualifications/Qualifications';
import { PricePolicy } from '../PricePolicy/PricePolicy';

export const HomePage = () => {
  return (
    <div>
      <Container>
        <StyledWrapper>
          <Aside />
          <StyledBox>
            <StyledNav>
              <header>
                <Header />
              </header>
            </StyledNav>
            <Services />
            <AboutUs />
            <WhyUs />
            <OfferedServices />
            <Qualifications />
            <PricePolicy />
            <MyForm />
          </StyledBox>
        </StyledWrapper>
      </Container>
    </div>
  );
};
