'use client';
import React from 'react';
import { MyForm } from '../Form/Form';
import { Container } from '@mui/material';
import { Aside } from '../Aside/Aside';
import { StyledWrapper } from './Styled';

export const HomePage = () => {
  return (
    <div>
      <Container>
        <StyledWrapper>
          <Aside />
          <MyForm />
        </StyledWrapper>
      </Container>
    </div>
  );
};
