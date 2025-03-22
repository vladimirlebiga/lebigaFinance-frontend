'use client';
import TextField from '@mui/material/TextField';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

interface InputConfig {
  name: string;
  label: string;
  placeholder: string;
}

const config: Record<string, InputConfig> = {
  description: {
    name: 'description',
    label: 'Description',
    placeholder: 'Enter your description',
  },
};

interface InputProps {
  id: string;
}

export const TextareaComponent = ({ id }: InputProps) => {
  const { name, label, placeholder } = config[id];
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div>
          <label htmlFor={name}>{label}</label>
          <TextField
            multiline
            rows={4}
            {...field}
            id={name}
            variant="outlined"
            error={!!error}
            helperText={error ? error.message : ''}
            placeholder={placeholder}
            fullWidth
          />
        </div>
      )}
    />
  );
};
