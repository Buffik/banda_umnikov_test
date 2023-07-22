import type { ApiResult } from '.'
import type { ICafes } from '@/stores/cafeData'
import Api from '@/api/requests'

const apiPath = 'get-index'

class getAllCafes {
  public async get(): Promise<ApiResult<ICafes>> {
    return await Api.get(apiPath)
  }
}

export default new getAllCafes()
