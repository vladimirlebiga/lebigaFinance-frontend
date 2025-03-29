'use client';
import React from 'react';
import { MyForm } from '../Form/Form';
import { Container } from '@mui/material';
import { Aside } from '../Aside/Aside';
import { StyledBox, StyledNav, StyledWrapper } from './Styled';
import { Header } from '../Header/Header';

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
            <MyForm />
          </StyledBox>
        </StyledWrapper>
      </Container>
    </div>
  );
};
