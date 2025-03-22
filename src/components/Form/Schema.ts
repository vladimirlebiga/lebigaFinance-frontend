import * as yup from 'yup';
import { InferType } from 'yup';

export const schemaContact = yup.object().shape({
  name: yup
    .string()
    .required("Ім'я обов'язкове")
    .matches(
      /^[A-Za-zА-Яа-яЇїІіЄєҐґ\s-]+$/,
      'Тільки кирилиця чи латиниця, пробіли і дефіси',
    )
    .min(2, "Ім'я має містити принаймні 2 символи")
    .max(45, "Ім'я може містити максимум 45 символів"),
  email: yup
    .string()
    .email('Невірний формат email')
    .required("Email обов'язковий"),
  description: yup
    .string()
    .required("Опис обов'язковий")
    .min(10, 'Опис має містити принаймні 10 символів')
    .max(1000, 'Опис може містити максимум 1000 символів'),
  phone: yup.string().required('Телефон обовязковий'),
  companyRegistration: yup.boolean(),
  accountingBookkeeping: yup.boolean(),
  taxReturns: yup.boolean(),
  financialPlanning: yup.boolean(),
  loansBusiness: yup.boolean(),
  legalContract: yup.boolean(),
  other: yup.boolean(),
});

export type SignupSchema = InferType<typeof schemaContact>;
