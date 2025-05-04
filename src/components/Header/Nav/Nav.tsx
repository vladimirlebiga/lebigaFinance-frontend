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
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
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
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    icon: PiCoinsBold,
    link: '#price-policy',
    isMuiIcon: false,
    scrolledClass: '2/5/3/6',
  },
];

export const Nav = () => {
  const [textShown, setTextShown] = useState<string | null>(null);
  const handleMouseEnter = (title: string) => {
    setTextShown(title);
    console.log('textShown', textShown);
  };
  const handleMouseOut = () => {
    setTextShown(null);
    console.log('textShown', textShown);
  };

  return (
    <NavContainer>
      <StyledUl>
        {navMenu.map((item) => (
          <StyledLi
            key={item.title}
            smallArea={item.scrolledClass}
            onMouseEnter={() => handleMouseEnter(item.title)}
            onMouseLeave={() => handleMouseOut()}
          >
            <StyledIconWrapper href={item.link}>
              {textShown !== item.title && (
                <div>
                  {' '}
                  {item.isMuiIcon ? (
                    <item.icon fontSize="large" />
                  ) : (
                    <item.icon size={40} />
                  )}
                </div>
              )}

              {textShown === item.title && (
                <StyledParagraph> {item.title}</StyledParagraph>
              )}
            </StyledIconWrapper>
          </StyledLi>
        ))}
      </StyledUl>
    </NavContainer>
  );
};
