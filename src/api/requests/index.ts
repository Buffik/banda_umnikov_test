import axios, { type AxiosRequestConfig, type AxiosInstance, type AxiosResponse } from 'axios'

const apiHost = 'https://bandaumnikov.ru/api/test/site/'
const configuration: AxiosRequestConfig = {
  baseURL: apiHost,
  responseType: 'json'
}

export interface ApiResult<T> {
  data: T | null
  error: any | null
}

class Api {
  private axios: AxiosInstance

  constructor() {
    this.axios = axios.create(configuration)
  }

  public async get<T>(url: string): Promise<ApiResult<T>> {
    try {
      const { data } = await this.axios.get(url)

      return {
        data,
        error: null
      }
    } catch (error) {
      return {
        data: null,
        error
      }
    }
  }
}

export default new Api()
