import Patcher from './Patcher'

function definePatch(matches?: string | Array<string>) {
  if (!matches) return new Patcher()

  matches = Array.isArray(matches) ? matches : [matches]
  return new Patcher(matches)
}

export default definePatch
