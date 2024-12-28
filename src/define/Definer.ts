import { extension } from '../decorator'

interface Attrs {
  '@_Name': string
  '@_ParentName': string
}

@extension
export default abstract class Definer {
  protected abstract type: string
  protected abstract attrs: Partial<Attrs>
  protected defined: Record<string, unknown> = {}

  constructor(defName: string) {
    this.defined.defName = defName
  }

  get defName() {
    return <string>this.defined.defName
  }
}
