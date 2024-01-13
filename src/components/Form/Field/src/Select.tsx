import { FormControl, FormLabel, Select } from '@chakra-ui/react';

import type { FieldProps } from '@/components/Form/Field/models/field-config';

import ErrorMessage from './FieldElements/ErrorMessage';

const SelectField = ({
  register,
  formState: { errors },
  fieldConfig: {
    name,
    label,
    placeholder,
    required,
    disabled,
    options,
    displayOptions,
  },
}: FieldProps) => {
  return (
    <FormControl
      as='section'
      isInvalid={Boolean(errors[name])}
      isRequired={required}
      isDisabled={disabled}
    >
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Select
        placeholder={placeholder ?? `請選擇${label}`}
        size='lg'
        {...register(name, {
          required: required && `${label}為必填欄位`,
        })}
        borderColor='line'
      >
        {options?.map((option, index) => (
          <option key={option} value={option}>
            {displayOptions && displayOptions[index]
              ? displayOptions[index]
              : option}
          </option>
        ))}
      </Select>
      <ErrorMessage errors={errors} name={name} />
    </FormControl>
  );
};

export default SelectField;
