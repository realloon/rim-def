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

export default function output(defs: Definer[], root?: string): void
export default function output(patches: Patcher[], root?: string): void
export default function output(about: Abouter, root?: string): void
export default async function output(
  parm: Definer[] | Patcher[] | Abouter,
  root: string = './output'
) {
  const declaration = '<?xml version="1.0" encoding="utf-8"?>'
  let fileName: string
  let tag: string
  let content: string

  if (Array.isArray(parm)) {
    if (isDefs(parm)) {
      fileName = 'Defs/defs.xml'
      tag = 'Defs'
      content = parm
        .map(definer => builder.build(wrapArray(Definer.bundle(definer))))
        .join('\n')
    } else {
      fileName = 'Patches/patches.xml'
      tag = 'Patch'
      content = builder.build({
        Operation: wrapArray(
          parm.flatMap(patch => <unknown>Patcher.bundle(patch))
        ),
      })
    }
  } else {
    fileName = 'About/About.xml'
    tag = 'ModMetaData'
    content = builder.build(wrapArray(Abouter.bundle(parm)))
  }

  const xml = `${declaration}<${tag}>${content}</${tag}>`
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
