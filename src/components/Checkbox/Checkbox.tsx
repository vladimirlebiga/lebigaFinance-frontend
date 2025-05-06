'use client';
import React, { useEffect, useState, useId } from 'react';
import { Checkbox, FormControlLabel, FormHelperText } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

interface CheckboxInputProps {
  id: string;
}

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

const CheckboxInput = ({ id }: CheckboxInputProps) => {
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
