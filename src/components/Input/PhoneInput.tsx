// 'use client';
// import React from 'react';
// import { Controller, useFormContext } from 'react-hook-form';
// import { MuiTelInput } from 'mui-tel-input';

// export const PhoneInputComponent = () => {
//   const { control } = useFormContext();

//   return (
//     <Controller
//       name="phone"
//       control={control}
//       rules={{ required: 'Phone number is required' }}
//       render={({ field, fieldState: { error } }) => (
//         <div>
//           <label htmlFor="phone">Phone</label>
//           <MuiTelInput {...field} defaultCountry="NL" />
//           {error && <p style={{ color: 'red' }}>{error.message}</p>}
//         </div>
//       )}
//     />
//   );
// };

'use client';
import React, { useState, useEffect, useId } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { MuiTelInput } from 'mui-tel-input';

export const PhoneInputComponent = () => {
  // 1. Ensure hooks are always called in the same order
  const [mounted, setMounted] = useState(false);
  const reactId = useId();
  const { control } = useFormContext();

  useEffect(() => {
    setMounted(true);
  }, []);

  // 2. Defer rendering until after the component has mounted
  if (!mounted) return null;

  return (
    <Controller
      name="phone"
      control={control}
      rules={{ required: 'Phone number is required' }}
      render={({ field, fieldState: { error } }) => (
        <div>
          {/* Use the stable ID for both label and input */}
          <label htmlFor={`phone-${reactId}`}>Phone</label>
          <MuiTelInput {...field} defaultCountry="NL" id={`phone-${reactId}`} />
          {error && <p style={{ color: 'red' }}>{error.message}</p>}
        </div>
      )}
    />
  );
};
