import axios, { type AxiosError } from "axios";

export interface IResponse<T> {
  data: T | null;
  status: number;
  statusText: string;
}

interface IConnection {
  GET<T>(path: string): Promise<IResponse<T>>;
  POST<T>(path: string, payload: T): Promise<IResponse<T>>;
}

export class Connection implements IConnection {
  private connection = axios.create();
  readonly baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.connection.defaults.baseURL = baseUrl;
  };

  async GET<T>(path: string) {
    try {
      const response = await this.connection.get<T>(path);
      return { data: response.data, status: response.status, statusText: response.statusText };
    } catch (err) {
      const error = err as AxiosError;
      return { data: null, status: (error.status ?? 500), statusText: error?.message };
      // throw new Error(`Error ${error.status} - ${error.message}`);
    }
  }

  async POST<T>(path: string, payload: T) {
    try {
      const response = await this.connection.post(path, payload);
      return { data: response.data, status: response.status, statusText: response.statusText };
    } catch (err) {
      const error = err as AxiosError;
      return { data: null, status: (error.status ?? 500), statusText: error?.message };
      // throw new Error(`Error ${error.status} - ${error.message}`);
    }
  }

}