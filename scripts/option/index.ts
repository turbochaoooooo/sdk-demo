import mergeOptions from './utils/mergeOptions'
import logger from '../utils/logger'
import { TrackerOptions, TrackerOptionsUser } from '../types/Options'

const getDefaultOptions = (): TrackerOptions => ({
  serviceUrl: null,
  projectId: 0,
  reportMode: 'auto',
  debug: false,
  localConfig: []
})

class OptionManager {
  private data: TrackerOptions

  constructor(data: TrackerOptions) {
    this.data = data
  }

  private static singleton: Nullable<OptionManager> = null

  /**
   * 获取 OptionManager 实例
   * @returns 
   */
  static getInstance() {
    if (!this.singleton) {
      this.singleton = new OptionManager(getDefaultOptions())
    }

    return this.singleton
  }

  /**
   * 初始化
   * @param options options
   */
  init(options: TrackerOptionsUser) {
    if (!options) {
      return
    }

    this.data = mergeOptions(getDefaultOptions(), options)
    logger.info('Inited with options:', this.data)
  }

  /**
   * 以 value 设置键为 key 的 option
   * @param key key
   * @param value value
   */
  set<T extends keyof TrackerOptions>(key: T, value: TrackerOptions[T]) {
    this.data[key] = value
  }

  /**
   * 获取键为 key 的 option
   * @param key key
   * @returns value
   */
  get<T extends keyof TrackerOptions>(key: T) {
    return this.data[key]
  }
}

export default OptionManager
