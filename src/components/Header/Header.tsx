'use client';
import React from 'react';
import { Nav } from './Nav/Nav';
import { StyledHeader, HeaderContent } from './Styled';

export const Header = () => {
  return (
    <StyledHeader>
      <HeaderContent>
        <Nav />
      </HeaderContent>
    </StyledHeader>
  );
};
