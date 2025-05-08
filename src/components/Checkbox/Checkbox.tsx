'use client';
import React, { useEffect, useState, useId } from 'react';
import { Checkbox, FormControlLabel, FormHelperText } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { useTranslation } from '@/hooks/useTranslation';

interface CheckboxInputProps {
  id: string;
}

interface CheckboxInputConfig {
  name: string;
  label: string;
}

const CheckboxInput = ({ id }: CheckboxInputProps) => {
  const { t } = useTranslation();
  const config: Record<string, CheckboxInputConfig> = {
    companyRegistration: {
      name: 'companyRegistration',
      label: t('contactForm.companyRegistration'),
    },
    accountingBookkeeping: {
      name: 'accountingBookkeeping',
      label: t('contactForm.taxReturns'),
    },
    taxReturns: {
      name: 'taxReturns',
      label: t('contactForm.accountingBookkeeping'),
    },
    financialPlanning: {
      name: 'financialPlanning',
      label: t('contactForm.financialPlanning'),
    },
    loansBusiness: {
      name: 'loansBusiness',
      label: t('contactForm.loansBusiness'),
    },
    legalContract: {
      name: 'legalContract',
      label: t('contactForm.legalContract'),
    },
    other: {
      name: 'other',
      label: t('contactForm.other'),
    },
  };
  // 1. Always call your Hooks in the same order, unconditionally
  const [mounted, setMounted] = useState(false);
  const { name, label } = config[id];
  const { control } = useFormContext();
  const reactId = useId();

  // 2. Then do your side effects
  useEffect(() => {
    setMounted(true);
  }, []);

  // 3. Finally, if you need to bail out of rendering, do so
  if (!mounted) return null;

  // 4. Otherwise, proceed to render the UI
  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <div>
            <FormControlLabel
              control={
                <Checkbox
                  {...field}
                  checked={!!field.value}
                  id={`${name}-${reactId}`}
                />
              }
              label={label}
            />
            {error && <FormHelperText error>{error.message}</FormHelperText>}
          </div>
        )}
      />
    </div>
  );
};

export default CheckboxInput;
