'use client';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { MuiTelInput } from 'mui-tel-input';

export const PhoneInputComponent = () => {
  const { control } = useFormContext();

  return (
    <Controller
      name="phone"
      control={control}
      rules={{ required: 'Phone number is required' }}
      render={({ field, fieldState: { error } }) => (
        <div>
          <label htmlFor="phone">Phone</label>
          <MuiTelInput {...field} defaultCountry="NL" />
          {error && <p style={{ color: 'red' }}>{error.message}</p>}
        </div>
      )}
    />
  );
};
