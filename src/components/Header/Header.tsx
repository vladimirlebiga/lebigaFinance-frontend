'use client';
import React, { useState } from 'react';
import { Nav } from './Nav/Nav';
import { StyledHeader, HeaderContent } from './Styled';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';
import { StyledLangButtonWrapper } from '../LanguageSwitcher/Styled';
import { useResponsive } from '@/contexts/ResponsiveContext';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { StyledLink, StyledIcon } from '../Pages/Styled';

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { isMobile } = useResponsive();

  return (
    <StyledHeader isMobile={isMobile}>
      <HeaderContent isMobile={isMobile}>
        {!isMobile && <Nav />}
        {isMobile && isOpen && <Nav onLinkClick={() => setIsOpen(false)} />}
        {isMobile && (
          <StyledLangButtonWrapper isMobile={isMobile}>
            <LanguageSwitcher onLinkClick={() => setIsOpen(false)} />
          </StyledLangButtonWrapper>
        )}

        {isMobile && (
          <>
            {!isOpen && (
              <MenuIcon onClick={() => setIsOpen(true)} sx={{ fontSize: 40 }} />
            )}
            {isOpen && (
              <CloseIcon
                onClick={() => setIsOpen(false)}
                sx={{ fontSize: 40 }}
              />
            )}
          </>
        )}
        {isMobile && (
          <StyledLink
            isMobile={isMobile}
            href="#home"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <StyledIcon />
          </StyledLink>
        )}
      </HeaderContent>
    </StyledHeader>
  );
};
