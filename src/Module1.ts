export interface Response {
  loading: boolean;
  error: boolean;
}

export default class ModuleOne {
  request(): Response {
    return {
      loading: true,
      error: false
    };
  }
}
