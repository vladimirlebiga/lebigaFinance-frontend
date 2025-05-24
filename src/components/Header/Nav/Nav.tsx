import React, { useState } from 'react';
import Person2SharpIcon from '@mui/icons-material/Person2Sharp';
import SchoolSharpIcon from '@mui/icons-material/SchoolSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { PiHandHeartFill, PiCoinsBold } from 'react-icons/pi';
import {
  StyledIconWrapper,
  StyledUl,
  StyledLi,
  StyledParagraph,
  NavContainer,
} from './Styled';
import { useTranslation } from '@/hooks/useTranslation';
import { useResponsive } from '@/contexts/ResponsiveContext';
interface NavItem {
  title: string;
  icon?: React.ElementType;
  link: string;
  isMuiIcon?: boolean;
  scrolledClass?: string;
}

const navMenu: NavItem[] = [
  {
    title: 'About Us',
    icon: Person2SharpIcon,
    link: '#about',
    isMuiIcon: true,
    scrolledClass: '2/1/3/2',
  },
  {
    title: 'Qualifications & Professional Background',
    icon: SchoolSharpIcon,
    link: '#qualifications',
    isMuiIcon: true,
    scrolledClass: '2/2/3/3',
  },
  {
    title: 'Why Us',
    icon: PiHandHeartFill,
    link: '#why-us',
    isMuiIcon: false,
    scrolledClass: '2/3/3/4',
  },
  {
    title: 'Offered Services',
    icon: SearchSharpIcon,
    link: '#services',
    isMuiIcon: true,
    scrolledClass: '2/4/3/5',
  },
  {
    title: 'Price Policy',
    icon: PiCoinsBold,
    link: '#price-policy',
    isMuiIcon: false,
    scrolledClass: '2/5/3/6',
  },
  {
    title: 'Contact Us',
    link: '#contact',
  },
];

export const Nav = ({ onLinkClick }: { onLinkClick?: () => void }) => {
  const [textShown, setTextShown] = useState<string | null>(null);
  const { t } = useTranslation();
  const { isMobile } = useResponsive();
  const handleMouseEnter = (title: string) => {
    setTextShown(title);
  };
  const handleMouseOut = () => {
    setTextShown(null);
  };

  const getMenuTranslation = (index: number) => {
    return t(`menu.${index}.title`);
  };

  return (
    <NavContainer isMobile={isMobile}>
      <StyledUl isMobile={isMobile}>
        {navMenu.map((item, index) => (
          <StyledLi
            key={item.title}
            smallArea={item.scrolledClass}
            isMobile={isMobile}
            onMouseEnter={() => handleMouseEnter(item.title)}
            onMouseLeave={() => handleMouseOut()}
            onClick={onLinkClick}
          >
            <StyledIconWrapper href={item.link}>
              {isMobile ? (
                <StyledParagraph isMobile={isMobile}>
                  {getMenuTranslation(index)}
                </StyledParagraph>
              ) : textShown !== item.title ? (
                <div>
                  {item.icon &&
                    (item.isMuiIcon ? (
                      <item.icon sx={{ fontSize: 40 }} />
                    ) : (
                      <item.icon size={40} />
                    ))}
                </div>
              ) : (
                <StyledParagraph isMobile={isMobile}>
                  {getMenuTranslation(index)}
                </StyledParagraph>
              )}
            </StyledIconWrapper>
          </StyledLi>
        ))}
      </StyledUl>
    </NavContainer>
  );
};
