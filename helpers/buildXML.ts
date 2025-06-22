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
  arrayNodeName: 'ThingDef',
  root?: 'Defs'
) {
  const builder = new XMLBuilder({
    ignoreAttributes: false,
    attributeNamePrefix: '_',
    arrayNodeName: arrayNodeName, // FIXME: it just handle only type.
    format: true,
  })

  const preprocessed = data.map(item => preprocess(item))

  // FIXME: maybe it has some bugs.
  const structured = root
    ? { [root]: { [arrayNodeName]: preprocessed } }
    : preprocessed

  return builder.build(structured)
}
