'use client';
import Button from '@mui/material/Button';
import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import { useTranslation } from '@/hooks/useTranslation';

interface ButtonConfig {
  variant: 'contained' | 'outlined' | 'text';
  endIcon: React.ReactNode;
  text: string;
  type: 'button' | 'submit' | 'reset';
}

interface ButtonProps {
  id: string;
}

export const ButtonComponent = ({ id }: ButtonProps) => {
  const { t } = useTranslation();
  const config: Record<string, ButtonConfig> = {
    send: {
      variant: 'contained',
      endIcon: <SendIcon />,
      text: t('contactForm.sendButtonText'),
      type: 'submit',
    },
  };
  const { variant, endIcon, text, type } = config[id];
  return (
    <Button variant={variant} endIcon={endIcon} type={type}>
      {text}
    </Button>
  );
};
