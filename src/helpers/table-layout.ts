import type { TableConfig } from '@/components/TableLayout';
import datetime from '@/helpers/datetime';

export function tableConfigFormat(data: any, config: TableConfig) {
  const { name, endName, type, customFormat } = config;
  const value = data[name];

  switch (type) {
    case 'date':
      if (!value) return undefined;
      return datetime(value).displayDate();
    case 'datetime':
      if (!value) return undefined;
      return datetime(value).displayDatetime();
    case 'dateRange': {
      const endValue = data[endName!];
      if (!value || !endValue) return undefined;
      return `${datetime(value).displayDate()}~${datetime(
        endValue,
      ).displayDate()}`;
    }
    case 'boolean':
      return value ? '是' : '否';
    case 'custom':
      return customFormat && customFormat(value);
    case 'customData':
      return customFormat && customFormat(data);
    default:
      return value;
  }
}
