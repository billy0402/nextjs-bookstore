import instance from '@/services/utils/instance';

export async function apiList<TResponse extends Array<unknown> = unknown[]>(
  module: string,
  query: { [key: string]: any } = {},
) {
  return instance.get<null, TResponse>(`/${module}`, { params: query });
}

export async function apiDetail<TResponse = unknown>(
  module: string,
  id: string,
) {
  return instance.get<null, TResponse>(`/${module}/${id}`);
}

export async function apiCreate<TRequest = unknown, TResponse = TRequest>(
  module: string,
  data: TRequest,
) {
  return instance.post<TRequest, TResponse>(`/${module}`, data);
}

export async function apiUpdate<TRequest = unknown, TResponse = TRequest>(
  module: string,
  id: string,
  data: TRequest,
) {
  return instance.put<TRequest, TResponse>(`/${module}/${id}`, data);
}

export async function apiPartUpdate<TRequest = unknown, TResponse = TRequest>(
  module: string,
  id: string,
  data: TRequest,
) {
  return instance.patch<TRequest, TResponse>(`/${module}/${id}`, data);
}

export async function apiDelete(module: string, id: string) {
  return instance.delete(`/${module}/${id}`);
}
