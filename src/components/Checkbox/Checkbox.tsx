'use client';
import React from 'react';
import { Checkbox, FormControlLabel, FormHelperText } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

interface CheckboxInputConfig {
  name: string;
  label: string;
}

const config: Record<string, CheckboxInputConfig> = {
  companyRegistration: {
    name: 'companyRegistration',
    label: 'Company registration & setup (ZZP, BV, Holding, Stichting)',
  },
  accountingBookkeeping: {
    name: 'accountingBookkeeping',
    label: 'Tax returns - personal & business',
  },
  taxReturns: {
    name: 'taxReturns',
    label: 'Accounting & bookkeeping',
  },
  financialPlanning: {
    name: 'financialPlanning',
    label: 'Financial planning & tax optimization',
  },
  loansBusiness: {
    name: 'loansBusiness',
    label: 'Loans & business credit applications',
  },
  legalContract: {
    name: 'legalContract',
    label: 'Legal & contract support',
  },
  other: {
    name: 'other',
    label: 'Other questions',
  },
};

interface CheckboxInputProps {
  id: string;
}

const CheckboxInput = ({ id }: CheckboxInputProps) => {
  const { name, label } = config[id];
  const { control } = useFormContext();
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <div>
            <FormControlLabel
              control={<Checkbox {...field} checked={!!field.value} />}
              label={label}
            />
            {error && <FormHelperText error>{error.message}</FormHelperText>}
          </div>
        )}
      />
    </>
  );
};

export default CheckboxInput;
