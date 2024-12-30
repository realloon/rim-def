import { mkdir, writeFile } from 'fs/promises'
import { dirname } from 'path'
import Definer from '../define/Definer'
import info from './info'

export default async function output(
  defs: Array<Definer>,
  fileName: string = 'bundle'
) {
  const path = (fileName = `./output/${fileName}.xml`)
  const defsXml = defs.map(def => Definer.asXml(def)).join('')
  const result = `<?xml version="1.0" encoding="utf-8" ?><Defs>${defsXml}</Defs>`

  await mkdir(dirname(path), { recursive: true })
  await writeFile(path, result)

  info({
    state: 'Success',
    message: `The packaged results have been output to: ${path}.`,
  })
}

// function output(patches: Array<Patcher>) {
//   const bundledXml = builder.build(Patcher.bundle(patches))
//   const xml = '<?xml version="1.0" encoding="utf-8"?>' + bundledXml
//   console.log(xml)
// }
