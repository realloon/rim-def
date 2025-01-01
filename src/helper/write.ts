import { mkdir, writeFile } from 'fs/promises'
import { dirname } from 'path'

export default async function write(path: string, content: string) {
  await mkdir(dirname(path), { recursive: true })
  await writeFile(path, content)
}
