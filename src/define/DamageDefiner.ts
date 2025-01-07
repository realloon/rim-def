import type { Damage } from '../types/def'
import Definer from './Definer'

export default class DamageDefiner extends Definer {
  protected type = 'DamageDef'
  protected declare defined: Damage

  constructor(defName: string, extend?: string) {
    super(defName)
    extend && (this.attrs['@_ParentName'] = extend)
  }

  workerClass(value: Damage['workerClass']) {
    this.defined.workerClass = value
    return this
  }
}
