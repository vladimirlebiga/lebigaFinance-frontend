'use client';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { InferType } from 'yup';
import { schemaContact } from './Schema';
import { Box } from '@mui/material';
import { PhoneInputComponent } from '../Input/PhoneInput';
import CheckboxInput from '../Checkbox/Checkbox';
import { TextareaComponent } from '../Textarea/Textarea';
import { ButtonComponent } from '../Button/Button';
import { InputComponent } from '../Input/Input';

// Infer your form type directly from the schema:
type FormValues = InferType<typeof schemaContact>;

export function MyForm() {
  const formProps = useForm({
    defaultValues: {
      name: '',
      email: '',
      description: '',
      companyRegistration: false,
      taxReturns: false,
      accountingBookkeeping: false,
      financialPlanning: false,
      loansBusiness: false,
      legalContract: false,
      other: false,
      phone: '',
    },
    resolver: yupResolver(schemaContact),
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <div>
      <FormProvider {...formProps}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            void formProps.handleSubmit(onSubmit)(e);
          }}
        >
          <Box>
            <InputComponent id="name" />
          </Box>
          <Box>
            <InputComponent id="email" />
          </Box>
          <Box>
            <PhoneInputComponent />
          </Box>
          <Box>
            <CheckboxInput id="accountingBookkeeping" />
          </Box>
          <Box>
            <CheckboxInput id="taxReturns" />
          </Box>
          <Box>
            <CheckboxInput id="financialPlanning" />
          </Box>
          <Box>
            <CheckboxInput id="companyRegistration" />
          </Box>
          <Box>
            <CheckboxInput id="loansBusiness" />
          </Box>
          <Box>
            <CheckboxInput id="legalContract" />
          </Box>
          <Box>
            <CheckboxInput id="other" />
          </Box>

          <Box>
            <TextareaComponent id="description" />
          </Box>
          <div>
            <ButtonComponent id="send" />
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
