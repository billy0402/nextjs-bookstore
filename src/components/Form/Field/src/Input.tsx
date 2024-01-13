import { Center, FormControl, FormLabel, Input, Text } from '@chakra-ui/react';

import type { FieldProps } from '@/components/Form/Field/models/field-config';
import { dotKeysValue } from '@/helpers/object';

import ErrorMessage from './FieldElements/ErrorMessage';

const InputField = ({
  register,
  setValue,
  watch,
  formState: { errors },
  fieldConfig: {
    name,
    type,
    label,
    placeholder,
    required,
    disabled,
    defaultValue,
    pattern,
    validate,
    copyObserver,
    min,
    max,
  },
}: FieldProps) => {
  return (
    <FormControl
      as='section'
      isInvalid={!!dotKeysValue(errors, name)}
      isRequired={required}
      isDisabled={disabled}
    >
      <FormLabel htmlFor={name} display='flex'>
        {label}
        {copyObserver && (
          <Center
            ml='5'
            onClick={() => setValue(name, watch(copyObserver.observer))}
          >
            <input
              type='checkbox'
              readOnly
              checked={
                !!String(watch(name)).length &&
                watch(copyObserver.observer) === watch(name)
              }
            />
            <Text ml='1'>{copyObserver.label}</Text>
          </Center>
        )}
      </FormLabel>
      <Input
        {...register(name, {
          required: required && `${label}為必填欄位`,
          valueAsNumber: (type === 'number') as any,
          pattern,
          validate,
          min: { value: min as number, message: `最小值為 ${min}` },
          max: { value: max as number, message: `最大值為 ${max}` },
        })}
        id={name}
        type={type}
        placeholder={placeholder ?? `請輸入${label}`}
        defaultValue={defaultValue}
        borderColor='line'
        size='lg'
      />

      <ErrorMessage errors={errors} name={name} />
    </FormControl>
  );
};

export default InputField;
