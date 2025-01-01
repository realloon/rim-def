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

  static getDefName(definer: Definer) {
    return definer.defined.defName
  }

  static bundle(definer: Definer) {
    return {
      [definer.type]: Object.assign(definer.attrs, definer.defined),
    }
  }
}
