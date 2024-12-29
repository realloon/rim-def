import { mkdir, writeFile } from 'fs/promises'
import { dirname } from 'path'
import Definer from '../define/Definer'

export default async function output(
  defs: Array<Definer>,
  fileName: string = 'bundle'
) {
  const path = (fileName = `./output/${fileName}.xml`)
  const defsXml = defs.map(def => Definer.asXml(def)).join('')
  const result = `<?xml version="1.0" encoding="utf-8" ?><Defs>${defsXml}</Defs>`

  await mkdir(dirname(path), { recursive: true })
  await writeFile(path, result)
  console.info(
    '\x1b[32m%s\x1b[0m',
    'Success',
    '\x1b[0m%s\x1b[0m',
    `The packaged results have been output to: ${path}.`
  )
}
