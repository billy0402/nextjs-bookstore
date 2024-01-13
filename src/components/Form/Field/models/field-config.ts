import type { InputHTMLAttributes } from 'react';

import type { RegisterOptions, UseFormReturn } from 'react-hook-form';

export type FieldConfig = Omit<
  InputHTMLAttributes<HTMLInputElement | HTMLSelectElement>,
  'pattern'
> &
  RegisterOptions & {
    name: string; // override InputHTMLAttributes
    type: string; // override InputHTMLAttributes
    label: string;
    col?: number;
    options?: any[]; // type='select' | 'checkbox' | 'radio'
    displayOptions?: any[]; // type='select' | 'checkbox' | 'radio'
    fieldConfigs?: FieldConfig[]; // type='array'
    arrayHeaderKey?: string; // 放在array的header上的 欄位名稱
    compareObserver?: {
      observer: string;
      condition: (value: any) => boolean;
    };
    copyObserver?: {
      observer: string;
      label: string;
    };
    isMinTextarea?: boolean;
  };

export type FieldProps = UseFormReturn & {
  fieldConfig: FieldConfig;
};
