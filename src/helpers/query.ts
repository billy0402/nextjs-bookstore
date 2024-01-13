import { isNullOrEmpty, isObject } from '@/helpers/utils';

export function formatQueryString(url: string, ...args: any[]) {
  if (args.length === 0) {
    return url;
  }
  const [query] = args;
  if (isObject(query)) {
    const params: string[] = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const name of Object.keys(query)) {
      if (isNullOrEmpty(query[name])) {
        // eslint-disable-next-line no-continue
        continue;
      }
      params.push(`${name}=${query[name]}`);
    }
    if (params.length === 0) {
      return url;
    }
    return `${url}?${params.join('&')}`;
  }
  return [url, ...args].join('/');
}

export function cleanUpQuery(query: { [key: string]: unknown }) {
  Object.entries(query).forEach(([key, value]) => !value && delete query[key]);
  return JSON.parse(JSON.stringify(query));
}
