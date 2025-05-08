'use client';
import React, { useState, useEffect, useId } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { StyledTelInput } from './Styled';
import { useTranslation } from '@/hooks/useTranslation';

export const PhoneInputComponent = () => {
  const { t } = useTranslation();
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
      rules={{ required: t('contactForm.phoneRequired') }}
      render={({ field, fieldState: { error } }) => (
        <div>
          {/* Use the stable ID for both label and input */}
          {/* <label htmlFor={`phone-${reactId}`}>Phone</label> */}
          <StyledTelInput
            {...field}
            defaultCountry="NL"
            label={t('contactForm.phone')}
            id={`phone-${reactId}`}
          />
          {error && <p style={{ color: 'red' }}>{error.message}</p>}
        </div>
      )}
    />
  );
};
