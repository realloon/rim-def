import { XMLBuilder } from 'fast-xml-parser'

function preprocess(obj: Record<string, any>) {
  Object.keys(obj).forEach(key => {
    if (!Array.isArray(obj[key])) return
    obj[key] = { li: obj[key] }
  })

  return obj
}

export function buildXML(
  data: Array<Record<string, unknown>>,
  arrayNodeName: 'ThingDef' | 'SomeDef'
) {
  const builder = new XMLBuilder({
    ignoreAttributes: false,
    attributeNamePrefix: '_',
    arrayNodeName: arrayNodeName,
    format: true,
  })

  const preprocessed = data.map(item => preprocess(item))

  return builder.build(preprocessed)
}
