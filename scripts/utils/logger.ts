import OptionManager from '../option'
import Storage from '../utils/storage'
import { noop } from './index'
import { isIt } from './is';

// console proxy
const cache: Partial<Console> = {}

interface ConsoleProxy extends Console {
  verbose: Console;
}

const logger = new Proxy(console, {
  /**
   * 仅在 debug 模式下打印 log、info 和 warn
   */
  get(target: Console, key: keyof ConsoleProxy, receiver: any) {
    const isDebug = OptionManager.getInstance().get('debug')
    const isValueFunction = isIt.Function(Reflect.get(target, key))

    if (!isDebug && isValueFunction) {
      return noop
    }

    if (key === 'verbose') {
      return verboseProxy
    }

    if (!cache[key]) {
      cache[key] = Reflect.get(target, key, receiver).bind(receiver, '[MtTrack]')
    }

    return cache[key]
  }
}) as ConsoleProxy

// verbose console
// 仅在 Local Storage 中 __MT_TRACK_VERBOSE_LOGGER__ = true 时可用
const verboseProxy: Console = new Proxy(logger, {
  get(_, key: keyof Console) {
    if (Storage.getInstance().get('__MT_TRACK_VERBOSE_LOGGER__')) {
      return logger[key]
    }

    return noop
  }
})

export default logger
