export default function wrapArray(obj: Record<string, any>) {
  Object.entries(obj).forEach(([key, values]) => {
    if (Array.isArray(values)) {
      const wrapped = values.map(item =>
        isObject(values) ? wrapArray(item) : item
      )
      obj[key] = { li: wrapped } // adapt to convert to xml
    } else if (isObject(values)) {
      wrapArray(values)
    }
  })

  return obj
}

function isObject(val: unknown): val is object {
  return typeof val === 'object' && val !== null
}
