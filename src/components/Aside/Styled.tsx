'use client';
import { styled } from '@mui/material/styles';

export const StyledAside = styled('aside')(() => ({
  position: 'relative',
  height: '100%',
  gridColumn: '1 / 3',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '4px',
  padding: '16px',
}));

// export const StyledNewImgOrange = styled('div')(() => ({
// position: 'absolute', // Use absolute positioning relative to StyledAside
// // backgroundImage: `url(https://res.cloudinary.com/dico8i3m0/image/upload/v1744829456/slide_3_zmklbo.png)`,
// bottom: '60%',
// left: '20%',
// width: '400px',
// height: '400px',
// backgroundImage: `url(https://res.cloudinary.com/dico8i3m0/image/upload/v1744526813/slide_3_e5higr.png)`,
// backgroundSize: '400px 400px',
// backgroundPosition: 'bottom 63% left 99%',
// backgroundRepeat: 'no-repeat',
// }));

export const StyledNewImgOrange = styled('div')(() => ({
  position: 'absolute', // Use absolute positioning relative to StyledAside
  // backgroundImage: `url(https://res.cloudinary.com/dico8i3m0/image/upload/v1744829456/slide_3_zmklbo.png)`,
  bottom: '60%',
  left: '20%',
  width: '400px',
  height: '400px',
  backgroundImage: `url(https://res.cloudinary.com/dico8i3m0/image/upload/t_orangeSmall/v1744829456/slide_3_zmklbo.png)`,
  // backgroundSize: '400px 400px',
  // backgroundPosition: 'bottom 63% left 99%',
  // backgroundRepeat: 'no-repeat',
}));

// New styled component for the image
export const StyledNewImg = styled('div')(() => ({
  position: 'absolute', // Use absolute positioning relative to StyledAside
  backgroundImage: `url(https://res.cloudinary.com/dico8i3m0/image/upload/v1744526772/slide_4_1_pvjhos.png)`,
  bottom: '48%',
  left: '30%',
  width: '400px',
  height: '400px',
}));

// New styled component for the image
export const StyledNewImgDoc = styled('div')(() => ({
  position: 'absolute', // Use absolute positioning relative to StyledAside
  backgroundImage: `url(https://res.cloudinary.com/dico8i3m0/image/upload/v1744526756/slide_5_wn9wii.png)`,
  bottom: '39%',
  left: '30%',
  width: '380px',
  height: '480px',
}));

export const StyledSticky = styled('div')(() => ({
  position: 'fixed',
  left: '0',
  height: '100vh',
  width: '40vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '4px',
  padding: '16px',
}));

export const StyledAsideWrapper = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '20px 0',
}));

export const StyledIconWrapper = styled('div')(() => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: '8px 0',
}));

export const StyledWrapper = styled('div')(() => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  margin: '8px 0',
}));

export const StyledSpan = styled('div')(() => ({
  // display: 'flex',
  // alignItems: 'center',
  margin: '8px 5%',
  fontWeight: 'normal', // ensures the text is not bold
  fontSize: '5rem',
}));

const StyledH1 = styled('h1')({
  display: 'flex',
  alignItems: 'center',
});

export const HeaderTitle = () => (
  <StyledH1>
    <span>LEBIGA</span>
    <span style={{ fontWeight: 'normal', marginLeft: '8px' }}>FINANCE</span>
  </StyledH1>
);
