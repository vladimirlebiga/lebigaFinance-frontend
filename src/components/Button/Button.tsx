'use client';
import Button from '@mui/material/Button';
import React from 'react';
import SendIcon from '@mui/icons-material/Send';

interface ButtonConfig {
  variant: 'contained' | 'outlined' | 'text';
  endIcon: React.ReactNode;
  text: string;
  type: 'button' | 'submit' | 'reset';
}

const config: Record<string, ButtonConfig> = {
  send: {
    variant: 'contained',
    endIcon: <SendIcon />,
    text: 'Send',
    type: 'submit',
  },
};

interface ButtonProps {
  id: string;
}

export const ButtonComponent = ({ id }: ButtonProps) => {
  const { variant, endIcon, text, type } = config[id];
  return (
    <Button variant={variant} endIcon={endIcon} type={type}>
      {text}
    </Button>
  );
};
