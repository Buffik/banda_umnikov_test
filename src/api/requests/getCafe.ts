import type { ApiResult } from '.'
import type { ICafe } from '../models/CafeInterface'
import Api from '@/api/requests'

const apiQuery = 'get-view?id='

class getCafe {
  public async get(id: string): Promise<ApiResult<{ resources: ICafe }>> {
    return await Api.get(`${apiQuery}${id}`)
  }
}

export default new getCafe()
