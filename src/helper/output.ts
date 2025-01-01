// Node
import { resolve } from 'path'
// Class
import Definer from '../define/Definer'
import Patcher from '../patch/Patcher'
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
export default async function output(
  items: Array<Definer> | Array<Patcher>,
  root: string = './output'
) {
  const declaration = '<?xml version="1.0" encoding="utf-8"?>'
  let fileName: string
  let xml: string

  if (isDefs(items)) {
    fileName = 'defs.xml'
    const bundled = items.map(definer => Definer.bundle(definer))
    const xmlObj = { Defs: wrapArray(bundled) }
    xml = declaration + builder.build(xmlObj)
  } else {
    fileName = 'patches.xml'
    const bundled = items.flatMap(patch => <unknown>Patcher.bundle(patch))
    const xmlObj = { Patch: { Operation: wrapArray(bundled) } }
    xml = declaration + builder.build(xmlObj)
  }

  const path = resolve(root, fileName)
  await write(path, xml)
  info({
    state: 'Success',
    message: `has been written to ${path}`,
  })
}

function isDefs(items: Array<Definer | Patcher>): items is Array<Definer> {
  return items[0] instanceof Definer
}
