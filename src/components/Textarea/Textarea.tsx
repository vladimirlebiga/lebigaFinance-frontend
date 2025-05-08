'use client';
import React, { useEffect, useState, useId } from 'react';
import TextField from '@mui/material/TextField';
import { Controller, useFormContext } from 'react-hook-form';
import { useTranslation } from '@/hooks/useTranslation';

interface InputConfig {
  name: string;
  label: string;
  placeholder: string;
}

interface InputProps {
  id: string;
}

export const TextareaComponent = ({ id }: InputProps) => {
  const { t } = useTranslation();
  const config: Record<string, InputConfig> = {
    description: {
      name: 'description',
      label: t('contactForm.description'),
      placeholder: t('contactForm.descriptionPlaceholder'),
    },
  };
  // 1. Call hooks unconditionally at top
  const [mounted, setMounted] = useState(false);
  const reactId = useId();
  const { name, label, placeholder } = config[id];
  const { control } = useFormContext();

  // 2. Then do side effects
  useEffect(() => {
    setMounted(true);
  }, []);

  // 3. Conditionally return null or the UI
  if (!mounted) return null;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div>
          {/* <label htmlFor={`${name}-${reactId}`}>{label}</label> */}
          <TextField
            multiline
            rows={4}
            {...field}
            id={`${name}-${reactId}`}
            variant="outlined"
            error={!!error}
            helperText={error ? error.message : ''}
            placeholder={placeholder}
            label={label}
            fullWidth
          />
        </div>
      )}
    />
  );
};
