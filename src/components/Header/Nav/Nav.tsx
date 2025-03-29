import React from 'react';
import Person2SharpIcon from '@mui/icons-material/Person2Sharp';
import SchoolSharpIcon from '@mui/icons-material/SchoolSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { PiHandHeartFill, PiCoinsBold } from 'react-icons/pi';
import { StyledIconWrapper } from './Styled';

interface NavItem {
  title: string;
  icon: React.ElementType;
  link: string;
  isMuiIcon: boolean;
}

const navMenu: NavItem[] = [
  {
    title: 'About Us',
    icon: Person2SharpIcon,
    link: '#about',
    isMuiIcon: true,
  },
  {
    title: 'Qualifications & Professional Background',
    icon: SchoolSharpIcon,
    link: '#qualifications',
    isMuiIcon: true,
  },
  {
    title: 'Why Us',
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    icon: PiHandHeartFill,
    link: '#why-us',
    isMuiIcon: false,
  },
  {
    title: 'Offered Services',
    icon: SearchSharpIcon,
    link: '#services',
    isMuiIcon: true,
  },
  {
    title: 'Price Policy',
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    icon: PiCoinsBold,
    link: '#price-policy',
    isMuiIcon: false,
  },
];

export const Nav = () => {
  return (
    <nav>
      <ul>
        {navMenu.map((item) => (
          <li key={item.title}>
            <StyledIconWrapper href={item.link}>
              {item.isMuiIcon ? (
                <item.icon fontSize="large" />
              ) : (
                <item.icon size={40} />
              )}
              {item.title}
            </StyledIconWrapper>
          </li>
        ))}
      </ul>
    </nav>
  );
};
