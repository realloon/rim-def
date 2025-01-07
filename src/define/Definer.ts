import type { I18n } from '../types/i18n'

interface Attrs {
  '@_Name': string
  '@_ParentName': string
}

interface translated {
  defName: string
  field: string
  i18n: I18n
}

export default abstract class Definer {
  protected abstract type: string
  protected attrs: Partial<Attrs> = {}
  protected defined: Record<string, unknown> = {}
  static translated = new Set<translated>()

  constructor(defName: string) {
    this.defined.defName = defName
  }

  static getDefName(definer: Definer) {
    return definer.defined.defName
  }

  static bundle(definer: Definer) {
    return {
      [definer.type]: Object.assign(definer.attrs, definer.defined),
    }
  }
}
