import { FormProvider, useForm } from 'react-hook-form';

import type { FieldConfig } from '@/components/Form/Field/models/field-config';

import Field from './Field';

type Props = {
  fieldConfigs: FieldConfig[];
  onSubmit: (data: any) => void;
  children?: React.ReactNode;
};

const Form = ({ fieldConfigs, onSubmit, children }: Props) => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form className='form' onSubmit={methods.handleSubmit(onSubmit)}>
        <article className='row'>
          {fieldConfigs.map((fieldConfig) => (
            <section
              key={fieldConfig.name}
              className={`row__col row__col--${fieldConfig.col ?? 12}`}
            >
              <Field fieldConfig={fieldConfig} />
            </section>
          ))}
          {children}
        </article>
      </form>
    </FormProvider>
  );
};

export default Form;
