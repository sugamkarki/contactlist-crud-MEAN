export interface Contact {
  id?: string;
  first_name: string;
  last_name: string;
  phone: string;
}
export interface APIResponse<T> {
  results: Array<T>;
}
