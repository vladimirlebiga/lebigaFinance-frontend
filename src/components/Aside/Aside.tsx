'use client';
import React, { useState, useRef, useEffect } from 'react';
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
  StyledLang,
  StyledIcon,
  StyledNed,
  StyledUkr,
  StyledEng,
  StyledRus,
  StyledLangWrapper,
  StyledLangButtonWrapper,
} from './Styled';
import MailSharpIcon from '@mui/icons-material/MailSharp';
import PhoneSharpIcon from '@mui/icons-material/PhoneSharp';
import ContactMailSharpIcon from '@mui/icons-material/ContactMailSharp';
import Link from 'next/link';
import { Footer } from '../Footer/Footer';

export const Aside: React.FC = () => {
  const [shown, setShown] = useState<boolean>(false);
  // Let TypeScript infer the ref type; it will be HTMLDivElement | null
  const langRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const targetNode = e.target as Node;
      if (langRef.current && !langRef.current.contains(targetNode)) {
        setShown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
            <a href="mailto:finance@lebiga.nl">finance@lebiga.nl</a>
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
        {/* Language selector with click-outside detection */}
        <StyledLangButtonWrapper>
          <StyledLang ref={langRef} onClick={() => setShown((prev) => !prev)}>
            <StyledIcon />
          </StyledLang>
          {shown && (
            <StyledLangWrapper>
              <StyledNed href="">NED</StyledNed>
              <StyledUkr href="">УКР</StyledUkr>
              <StyledEng href="">ENG</StyledEng>
              <StyledRus href="">РУС</StyledRus>
            </StyledLangWrapper>
          )}
        </StyledLangButtonWrapper>
        <Footer />
      </StyledSticky>
    </StyledAside>
  );
};
