// 'use client';
// import { styled } from '@mui/material/styles';
// import { TextField } from '@mui/material';

// export const StyledTextField = styled(TextField)(() => ({
//   backgroundColor: 'transparent',

//   // target the OutlinedInput slot…
//   '& .MuiOutlinedInput-root': {
//     // …and then the actual <input>
//     '& input': {
//       // autofill overrides
//       '&:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus':
//         {
//           // erase Chrome’s fill‑color box
//           WebkitBoxShadow: '0 0 0 1000px transparent inset !important',
//           boxShadow: '0 0 0 1000px transparent inset !important',
//           // keep your text color
//           WebkitTextFillColor: 'inherit !important',
//           // (optional) prevent Chrome from re‑painting later
//           transition: 'background-color 5000s ease-in-out 0s !important',
//         },
//     },
//   },
// }));

'use client';
import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';
import { MuiTelInput } from 'mui-tel-input';

// shared style rules for transparent bg + chrome‐autofill override
const transparentBgAndAutofillFix = {
  backgroundColor: 'transparent',

  '& .MuiOutlinedInput-root': {
    '& input': {
      '&:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus':
        {
          WebkitBoxShadow: '0 0 0 1000px transparent inset !important',
          boxShadow: '0 0 0 1000px transparent inset !important',
          WebkitTextFillColor: 'inherit !important',
          transition: 'background-color 5000s ease-in-out 0s !important',
        },
    },
  },
};

// your existing styled TextField
export const StyledTextField = styled(TextField)(() => ({
  ...transparentBgAndAutofillFix,
}));

// new styled telephone input
export const StyledTelInput = styled(MuiTelInput)(() => ({
  ...transparentBgAndAutofillFix,
}));
