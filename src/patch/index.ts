import Patcher from './Patcher'

export function createPatch(matches?: string | Array<string>) {
  if (!matches) return new Patcher()

  matches = Array.isArray(matches) ? matches : [matches]
  return new Patcher(matches)
}
