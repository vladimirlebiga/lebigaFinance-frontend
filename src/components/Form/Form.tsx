'use client';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { InferType } from 'yup';
import { schemaContact } from './Schema';
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
          <div>
            <InputComponent id="name" />
          </div>
          <div>
            <InputComponent id="email" />
          </div>
          <div>
            <PhoneInputComponent />
          </div>
          <div>
            <CheckboxInput id="accountingBookkeeping" />
          </div>
          <div>
            <CheckboxInput id="taxReturns" />
          </div>
          <div>
            <CheckboxInput id="financialPlanning" />
          </div>
          <div>
            <CheckboxInput id="companyRegistration" />
          </div>
          <div>
            <CheckboxInput id="loansBusiness" />
          </div>
          <div>
            <CheckboxInput id="legalContract" />
          </div>
          <div>
            <CheckboxInput id="other" />
          </div>

          <div>
            <TextareaComponent id="description" />
          </div>
          <div>
            <ButtonComponent id="send" />
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
