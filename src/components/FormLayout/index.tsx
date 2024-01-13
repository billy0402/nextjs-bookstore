import { useEffect } from 'react';

import Link from 'next/link';

import { Button, Flex, Heading } from '@chakra-ui/react';
import { FormProvider, useForm } from 'react-hook-form';

import Field from '@/components/Form/Field';
import type { FieldConfig } from '@/components/Form/Field/models/field-config';
import { fieldSetDefault } from '@/helpers/field-set-default';

export type FormLayoutConfig = {
  title: string;
  routerName: string;
  fieldConfigs: FieldConfig[];
};

type Props = FormLayoutConfig & {
  detailData?: any;
  onSubmit: (data: any) => void;
  children?: React.ReactNode;
};

const FomLayout = ({
  title,
  routerName,
  fieldConfigs,
  detailData,
  onSubmit,
  children,
}: Props) => {
  const methods = useForm();

  useEffect(() => {
    if (!detailData) return;
    const editData = fieldSetDefault(fieldConfigs || [], detailData);
    methods.reset(editData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [detailData, fieldConfigs]);

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      <Flex as='header' justifyContent='space-between' paddingBottom='md'>
        <Heading>{title}</Heading>
        <Flex as='section' gap='sm'>
          <Link href={`/admin/${routerName}`}>
            <Button colorScheme='teal' type='submit'>
              返回
            </Button>
          </Link>
          <Button colorScheme='blue' type='submit'>
            儲存
          </Button>
        </Flex>
      </Flex>
      <FormProvider {...methods}>
        <div className='form'>
          <article className='row'>
            {/* {error && (
              <section className='row__col'>
                <p className='form__error-message'>{error}</p>
              </section>
            )} */}
            {fieldConfigs?.map((fieldConfig) => (
              <section
                key={fieldConfig.name}
                className={`row__col row__col--${fieldConfig.col ?? 12}`}
              >
                <Field fieldConfig={fieldConfig} />
              </section>
            ))}

            {children}
          </article>
        </div>
      </FormProvider>
    </form>
  );
};

export default FomLayout;
