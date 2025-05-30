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
import {
  StyledForm,
  StyledFormWrapper,
  StyledSection,
  StyledHeader,
} from './Styled';
import { useTranslation } from '@/hooks/useTranslation';
import { useResponsive } from '@/contexts/ResponsiveContext';

// Infer your form type directly from the schema:
type FormValues = InferType<typeof schemaContact>;

export function MyForm() {
  const { t } = useTranslation();
  const { isMobile } = useResponsive();
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

  // const onSubmit = async (data: FormValues) => {
  //   try {
  //     const res = await fetch('/api/contact', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(data),
  //     });
  const onSubmit = async (data: FormValues) => {
    try {
      console.log(data);
      const url = `/api/contact`;
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        // Show success message or reset form
        alert('Message sent!');
        formProps.reset();
      } else {
        // Show error message
        alert('There was an error sending your message.');
      }
    } catch {
      alert('There was an error sending your message.');
    }
  };

  return (
    <StyledSection isMobile={isMobile} id="contactForm">
      <StyledFormWrapper>
        <StyledHeader>{t('contactForm.title')}</StyledHeader>
        <FormProvider {...formProps}>
          <StyledForm
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
          </StyledForm>
        </FormProvider>
      </StyledFormWrapper>
    </StyledSection>
  );
}

//${window.location.origin}
