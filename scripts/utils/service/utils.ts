import OptionManager from '../option'
import { PATHS } from './constants'

const optionManager = OptionManager.getInstance()

/**
 * 获取上报服务 URL
 *   - 优先使用用户通过 option 传入的 URL
 *   - 若无，使用 GMS 后台配置的 URL
 *   - 若无，使用默认上报 URL
 * @returns
 */
export function getReportServiceUrl() {
  const serviceUrl = optionManager.get('serviceUrl')

  return serviceUrl || PATHS.REPORT
}
