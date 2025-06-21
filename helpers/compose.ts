/**
 * 组合两个对象。
 * - 默认行为类似 Object.assign。
 * - 如果某个键在两个对象中的值都是数组，则将它们连接。
 * - 如果某个键在两个对象中的值都是对象，则递归地调用 compose。
 */
export function compose<T extends object, K extends object>(
  obj1: T,
  obj2: K
): T & K {
  const result: Record<string, any> = { ...obj1 }

  for (const key in obj2) {
    if (Object.prototype.hasOwnProperty.call(obj2, key)) {
      const val1 = result[key]
      const val2 = obj2[key as keyof K]

      if (isObject(val1) && isObject(val2)) {
        result[key] = compose(val1, val2)
      } else if (Array.isArray(val1) && Array.isArray(val2)) {
        result[key] = val1.concat(val2)
      } else {
        result[key] = val2
      }
    }
  }

  return result as T & K
}

function isObject(item: unknown): item is Record<string, any> {
  return !!item && typeof item === 'object' && !Array.isArray(item)
}
