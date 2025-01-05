import { XMLBuilder } from 'fast-xml-parser'

const builder = new XMLBuilder({
  ignoreAttributes: false,
  processEntities: false,
  oneListGroup: false,
  format: true,
})

export default builder
