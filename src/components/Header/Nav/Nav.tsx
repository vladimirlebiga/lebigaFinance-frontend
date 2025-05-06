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

interface NavItem {
  title: string;
  icon: React.ElementType;
  link: string;
  isMuiIcon: boolean;
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
];

export const Nav = () => {
  const [textShown, setTextShown] = useState<string | null>(null);
  const { t } = useTranslation();

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
    <NavContainer>
      <StyledUl>
        {navMenu.map((item, index) => (
          <StyledLi
            key={item.title}
            smallArea={item.scrolledClass}
            onMouseEnter={() => handleMouseEnter(item.title)}
            onMouseLeave={() => handleMouseOut()}
          >
            <StyledIconWrapper href={item.link}>
              {textShown !== item.title && (
                <div>
                  {item.isMuiIcon ? (
                    <item.icon fontSize="large" />
                  ) : (
                    <item.icon size={40} />
                  )}
                </div>
              )}

              {textShown === item.title && (
                <StyledParagraph>{getMenuTranslation(index)}</StyledParagraph>
              )}
            </StyledIconWrapper>
          </StyledLi>
        ))}
      </StyledUl>
    </NavContainer>
  );
};
