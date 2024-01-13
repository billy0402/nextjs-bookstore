import { useFormContext } from 'react-hook-form';

import type { FieldConfig } from '@/components/Form/Field/models/field-config';

import Input from './src/Input';
import SelectField from './src/Select';
import Tags from './src/Tags';

type Props = {
  fieldConfig: FieldConfig;
};

const Field = ({ fieldConfig }: Props) => {
  const methods = useFormContext();

  switch (fieldConfig.type) {
    case 'hidden':
      return null;
    case 'select':
      return <SelectField {...methods} fieldConfig={fieldConfig} />;
    case 'tags':
      return <Tags {...methods} fieldConfig={fieldConfig} />;
    default:
      return <Input {...methods} fieldConfig={fieldConfig} />;
  }
};

export default Field;
