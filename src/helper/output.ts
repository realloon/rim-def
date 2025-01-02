// Node
import { resolve } from 'path'
// Class
import Definer from '../define/Definer'
import Patcher from '../patch/Patcher'
import Abouter from '../about/Abouter'
// Helper
import wrapArray from './wrapArray'
import builder from './builder'
import write from './write'
import info from './info'

export default function output(defs: Array<Definer>, root?: string): void
export default function output(
  patches: Array<Patcher>,
  root?: string
): void
export default function output(about: Abouter, root?: string): void
export default async function output(
  parm: Array<Definer> | Array<Patcher> | Abouter,
  root: string = './output'
) {
  const declaration = '<?xml version="1.0" encoding="utf-8"?>'
  let fileName: string
  let xmlObj: Record<string, unknown>

  if (Array.isArray(parm)) {
    if (isDefs(parm)) {
      fileName = 'defs.xml'
      xmlObj = {
        Defs: wrapArray(parm.map(definer => Definer.bundle(definer))),
      }
    } else {
      fileName = 'patches.xml'
      xmlObj = {
        Patch: {
          Operation: wrapArray(
            parm.flatMap(patch => <unknown>Patcher.bundle(patch))
          ),
        },
      }
    }
  } else {
    fileName = 'About.xml'
    xmlObj = { ModMetaData: wrapArray(Abouter.bundle(parm)) }
  }

  const xml = declaration + builder.build(xmlObj)
  const path = resolve(root, fileName)
  await write(path, xml)
  
  info({
    state: 'Success',
    message: `has been written to ${path}`,
  })
}

function isDefs(
  items: Array<Definer> | Array<Patcher>
): items is Array<Definer> {
  return items[0] instanceof Definer
}
