export function nextApi<T = object>(
  requestURL: string,
  init?: RequestInit
): Promise<T> {
  const baseUrl = process.env["HOST_API_URL"];

  return fetch(baseUrl + requestURL, init).then((res) => res.json());
}

// OS ROUTES HANDLERS ESTAVAM DANDO PROBLEMA DURANTE O BUILD, QUANDO ESTIVER ESTÁVEL POSSO VOLTAR A USAR.
