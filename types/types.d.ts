// 开关
type Switch = 0 | 1

// 对象 key
type ObjectKey = string | number | symbol

// 键值对
type KeyValue = { [key: ObjectKey]: any }

// Nullable
type Nullable<T> = T | null

// 键值对值
type ValueOf<T> = T[keyof T]

// 函数
type FunctionShape = (...args: any[]) => any