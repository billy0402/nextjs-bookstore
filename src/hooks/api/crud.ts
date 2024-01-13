import type {
  DefaultError,
  UseMutationOptions,
  UseQueryOptions,
} from '@tanstack/react-query';
import { useMutation, useQuery } from '@tanstack/react-query';

import {
  apiCreate,
  apiDelete,
  apiDetail,
  apiList,
  apiPartUpdate,
  apiUpdate,
} from '@/services/crud';

export type QueryOptions<TRequest = unknown, TResponse = TRequest> = Omit<
  UseQueryOptions<TResponse, DefaultError, TRequest>,
  'queryKey' | 'queryFn'
>;

export type MutationOptions<TRequest = unknown, TResponse = TRequest> = Omit<
  UseMutationOptions<TResponse, DefaultError, TRequest>,
  'queryKey' | 'mutationFn'
>;

const crudQueryKeys = {
  list: (module: string, query: { [key: string]: any } = {}) =>
    [module, 'list', query] as const,
  detail: (module: string, id: string) => [module, 'detail', id] as const,
};

export const useQueryList = <TResponse extends Array<unknown> = unknown[]>(
  module: string,
  query: { [key: string]: any } = {},
  options: QueryOptions<TResponse> = {},
) => {
  return useQuery({
    ...options,
    queryKey: crudQueryKeys.list(module, query),
    queryFn: () => apiList<TResponse>(module, query),
  });
};

export const useQueryDetail = <TResponse = unknown>(
  module: string,
  id: string,
  options: QueryOptions<TResponse> = {},
) => {
  return useQuery({
    ...options,
    queryKey: crudQueryKeys.detail(module, id),
    queryFn: () => apiDetail<TResponse>(module, id),
    enabled: !!id && options.enabled,
  });
};

export const useQueryCreate = <TRequest = unknown, TResponse = TRequest>(
  module: string,
  options: MutationOptions<TRequest, TResponse> = {},
) => {
  return useMutation({
    ...options,
    mutationFn: (newData: TRequest) =>
      apiCreate<TRequest, TResponse>(module, newData),
  });
};

export const useQueryUpdate = <TRequest = unknown, TResponse = TRequest>(
  module: string,
  id: string,
  options: MutationOptions<TRequest, TResponse> = {},
) => {
  return useMutation({
    ...options,
    mutationFn: (newData: TRequest) =>
      apiUpdate<TRequest, TResponse>(module, id, newData),
  });
};

export const useQueryPartUpdate = <TRequest = unknown, TResponse = TRequest>(
  module: string,
  id: string,
  options: MutationOptions<TRequest, TResponse> = {},
) => {
  return useMutation({
    ...options,
    mutationFn: (newData: TRequest) =>
      apiPartUpdate<TRequest, TResponse>(module, id, newData),
  });
};

export const useQueryDelete = (
  module: string,
  id: string,
  options: MutationOptions = {},
) => {
  return useMutation({
    ...options,
    mutationFn: () => apiDelete(module, id),
  });
};
