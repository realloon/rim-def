import type { Def } from '#types'
import { Defined } from '#defined'

export default abstract class Definer {
  constructor(defName: string, protected defined: Defined) {
    this.defined.defName = defName
  }

  static bundle(definer: Definer) {
    Defined.bundle(definer.defined)
  }

  label(value: Def['label']) {
    this.defined.description(value)
  }

  description(value: Def['description']) {
    this.defined.description(value)
  }

  descriptionHyperlinks(value: Def['descriptionHyperlinks']) {
    this.defined.descriptionHyperlinks(value)
  }
}
