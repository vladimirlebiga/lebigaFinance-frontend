'use client';
import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

// export const StyledTextField = styled(TextField)(() => ({
//   //   // target the outlined container
//   //   '& .MuiOutlinedInput-root': {
//   //     // your image
//   //     backgroundImage: `url(https://res.cloudinary.com/dico8i3m0/image/upload/v1744917751/background-25f_sa6qj3.jpg)`,
//   //     backgroundSize: 'cover',
//   //     backgroundPosition: 'center',
//   //     backgroundRepeat: 'no-repeat',
//   //   },
//   backgroundColor: 'transparent',
//   // outline styles…
//   '& .MuiOutlinedInput-root': {
//     /* … */
//   },
//   // autofill overrides
//   '& input:-webkit-autofill, & input:-webkit-autofill:hover, & input:-webkit-autofill:focus':
//     {
//       WebkitBoxShadow: '0 0 0 1000px transparent inset !important',
//       WebkitTextFillColor: 'inherit',
//     },
// }));

export const StyledTextField = styled(TextField)(() => ({
  backgroundColor: 'transparent',

  // target the OutlinedInput slot…
  '& .MuiOutlinedInput-root': {
    // …and then the actual <input>
    '& input': {
      // autofill overrides
      '&:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus':
        {
          // erase Chrome’s fill‑color box
          WebkitBoxShadow: '0 0 0 1000px transparent inset !important',
          boxShadow: '0 0 0 1000px transparent inset !important',
          // keep your text color
          WebkitTextFillColor: 'inherit !important',
          // (optional) prevent Chrome from re‑painting later
          transition: 'background-color 5000s ease-in-out 0s !important',
        },
    },
  },
}));
