'use client';

import { styled } from '@mui/material/styles';
import LanguageSharpIcon from '@mui/icons-material/LanguageSharp';

export const StyledLang = styled('button')(() => ({
  borderRadius: '50%',
  backgroundColor: 'transparent',
}));

export const StyledLangButtonWrapper = styled('div')(
  ({ isMobile }: { isMobile: boolean }) => ({
    position: 'relative',
    backgroundColor: 'transparent',
    width: isMobile ? '40px' : '50px',
    height: isMobile ? '40px' : '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: isMobile ? '0' : 0,
    marginTop: isMobile ? '2px' : 0,
    bottom: isMobile ? '0' : 'auto',
    right: isMobile ? '0' : 'auto',
  }),
);

export const StyledIcon = styled(LanguageSharpIcon)(() => ({
  color: '#333333',
  fontSize: '3.5rem',
}));

export const StyledLangWrapper = styled('div')(
  ({ isMobile }: { isMobile: boolean }) => ({
    position: 'absolute',
    bottom: isMobile ? '-280%' : '100%',
    right: isMobile ? '-10%' : '-30%',
    backgroundImage: isMobile
      ? `url(https://res.cloudinary.com/dico8i3m0/image/upload/v1743878987/white-paper-texture_pgvkop.jpg)`
      : 'none',
    backgroundColor: 'transparent',
    backgroundSize: isMobile ? 'cover' : 'auto',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: isMobile ? '50px' : 'auto',
    padding: isMobile ? '5px' : '0',
  }),
);

export const StyledNed = styled('button')(
  ({ isMobile }: { isMobile: boolean }) => ({
    position: isMobile ? 'relative' : 'absolute',
    top: isMobile ? '0' : '-25px',
    left: isMobile ? '0' : '-55px',
    padding: isMobile ? '2px' : '0',
    backgroundColor: 'transparent',
    fontSize: isMobile ? '1.2rem' : '1rem',
    '&:hover': {
      fontWeight: 'bold',
    },
  }),
);

export const StyledUkr = styled('button')(
  ({ isMobile }: { isMobile: boolean }) => ({
    position: isMobile ? 'relative' : 'absolute',
    top: isMobile ? '0' : '-5px',
    left: isMobile ? '0' : '-15px',
    padding: isMobile ? '2px' : '0',
    backgroundColor: 'transparent',
    fontSize: isMobile ? '1.2rem' : '1rem',
    '&:hover': {
      fontWeight: 'bold',
    },
  }),
);

export const StyledEng = styled('button')(
  ({ isMobile }: { isMobile: boolean }) => ({
    position: isMobile ? 'relative' : 'absolute',
    top: isMobile ? '0' : '20px',
    left: isMobile ? '0' : '5px',
    padding: isMobile ? '2px' : '0',
    backgroundColor: 'transparent',
    fontSize: isMobile ? '1.2rem' : '1rem',
    '&:hover': {
      fontWeight: 'bold',
    },
  }),
);

export const StyledRus = styled('button')(
  ({ isMobile }: { isMobile: boolean }) => ({
    position: isMobile ? 'relative' : 'absolute',
    top: isMobile ? '0' : '45px',
    left: isMobile ? '0' : '-15px',
    padding: isMobile ? '2px' : '0',
    backgroundColor: 'transparent',
    fontSize: isMobile ? '1.2rem' : '1rem',
    '&:hover': {
      fontWeight: 'bold',
    },
  }),
);

// import Brightness3OutlinedIcon from '@mui/icons-material/Brightness3Outlined';
