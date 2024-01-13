import Link from 'next/link';
import { useRouter } from 'next/router';

import {
  Button,
  Flex,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

import { tableConfigFormat } from '@/helpers/table-layout';
import type { ApiModel } from '@/models/api';

export type TableConfig = {
  name: string;
  endName?: string; // format='dateRange'
  sortName?: string;
  type:
    | 'text'
    | 'number'
    | 'date'
    | 'datetime'
    | 'dateRange'
    | 'boolean'
    | 'custom'
    | 'customData';
  label: string;
  customFormat?: (data: any, config?: TableConfig) => React.ReactNode;
  defaultValue?: React.ReactNode;
  isShow?: boolean;
};

export type TableLayoutConfig = {
  title: string;
  subtitle: string;
  tableConfigs: TableConfig[];
};

type Props = TableLayoutConfig & {
  listData: ApiModel[] | null;
};

const TableLayout = ({ title, subtitle, tableConfigs, listData }: Props) => {
  const router = useRouter();

  const { pathname } = router;

  return (
    <>
      <Heading fontSize='2rem' marginBottom='sm'>
        {title}
      </Heading>
      <Heading as='h2' fontSize='1.5rem'>
        {subtitle}
      </Heading>
      <Flex as='section' justifyContent='flex-end' marginY='md'>
        <Link href={`${pathname}/create`}>
          <Button colorScheme='blue'>新增</Button>
        </Link>
      </Flex>
      <TableContainer
        as='article'
        border='1px solid'
        borderColor='line'
        borderRadius='lg'
        borderBottom='unset'
      >
        <Table variant='simple'>
          <Thead>
            <Tr textAlign='left'>
              {tableConfigs.map((config) => (
                <Th key={config.name}>{config.label}</Th>
              ))}
              <Th visibility='hidden'>動作</Th>
            </Tr>
          </Thead>
          <Tbody>
            {listData?.length ? (
              listData?.map((item: ApiModel) => (
                <Tr key={item.id} style={{ height: '70px' }}>
                  {tableConfigs?.map((config) => (
                    <Td key={config.name}>
                      {tableConfigFormat(item, config) || config.defaultValue}
                    </Td>
                  ))}
                  <Td>
                    <Link href={`${pathname}/${item.id}`}>
                      <Button colorScheme='blue'>編輯</Button>
                    </Link>
                  </Td>
                </Tr>
              ))
            ) : (
              <tr>
                <td colSpan={tableConfigs.length + 1}>目前沒有資料</td>
              </tr>
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TableLayout;
