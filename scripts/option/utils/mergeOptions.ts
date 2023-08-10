/**
 * 合并 options
 * @param defaultOptions 默认 options
 * @param override 用户传入的 options
 * @returns 合并后的 options
 */
function mergeOptions<T extends Record<ObjectKey, any>>(defaultOptions: T, override: Partial<T>): T {
  return {
    ...defaultOptions,
    ...override
  }
}

export default mergeOptions
