export interface Todo {
  id: number;
  body: string;
  checked: boolean;
  timeCreate: string;
}

export interface UpdatePayload {
  body: string;
  id: number;
}

export interface CheckedPayload {
  id: number;
  checked: boolean;
}
