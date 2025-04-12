import React from 'react';
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
  className?: string;
  scrolledClass?: string;
}

const navMenu: NavItem[] = [
  {
    title: 'About Us',
    icon: Person2SharpIcon,
    link: '#about',
    isMuiIcon: true,
    className: '2/1/6/2', // Grid location
    scrolledClass: '2/1/3/2',
  },
  {
    title: 'Qualifications & Professional Background',
    icon: SchoolSharpIcon,
    link: '#qualifications',
    isMuiIcon: true,
    className: '7/1/11/2', // Grid location
    scrolledClass: '2/2/3/3',
  },
  {
    title: 'Why Us',
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    icon: PiHandHeartFill,
    link: '#why-us',
    isMuiIcon: false,
    className: '4/3/9/4', // Grid location
    scrolledClass: '2/3/3/4',
  },
  {
    title: 'Offered Services',
    icon: SearchSharpIcon,
    link: '#services',
    isMuiIcon: true,
    className: '2/5/6/6', // Grid location
    scrolledClass: '2/4/3/5',
  },
  {
    title: 'Price Policy',
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    icon: PiCoinsBold,
    link: '#price-policy',
    isMuiIcon: false,
    className: '5/5/11/6', // Grid location
    scrolledClass: '2/5/3/6',
  },
];

interface NavProps {
  scrolled: boolean;
}

export const Nav = ({ scrolled }: NavProps) => {
  return (
    <NavContainer>
      <StyledUl scrolled={scrolled}>
        {navMenu.map((item) => (
          <StyledLi
            key={item.title}
            area={item.className}
            smallArea={item.scrolledClass}
            scrolled={scrolled}
          >
            <StyledIconWrapper href={item.link}>
              {item.isMuiIcon ? (
                <item.icon fontSize="large" />
              ) : (
                <item.icon size={40} />
              )}
              {!scrolled && <StyledParagraph> {item.title}</StyledParagraph>}
            </StyledIconWrapper>
          </StyledLi>
        ))}
      </StyledUl>
    </NavContainer>
  );
};
