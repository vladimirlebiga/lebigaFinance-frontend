'use client';
import React, { useEffect, useState } from 'react';
import { Nav } from './Nav/Nav';
import { StyledHeader, HeaderContent } from './Styled';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // If user scrolls down more than 10px, set `scrolled` to true.
      if (window.scrollY > 10) {
        console.log(window.scrollY);
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <StyledHeader scrolled={scrolled}>
      <HeaderContent>
        <Nav scrolled={scrolled} />
      </HeaderContent>
    </StyledHeader>
  );
};
