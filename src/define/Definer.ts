import { builder, wrapArraysForXml } from '../helper'

interface Attrs {
  '@_Name': string
  '@_ParentName': string
}

export default abstract class Definer {
  protected abstract type: string
  protected abstract attrs: Partial<Attrs>
  protected defined: Record<string, unknown> = {}

  constructor(defName: string) {
    this.defined.defName = defName
  }

  static bundle(definer: Definer) {
    return wrapArraysForXml({
      [definer.type]: Object.assign(definer.attrs, definer.defined),
    })
  }

  static asXml(definer: Definer) {
    return builder.build(Definer.bundle(definer))
  }

  get defName() {
    return <string>this.defined.defName
  }
}
