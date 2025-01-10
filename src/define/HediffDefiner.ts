import type { Hediff } from '../types/def'
import Definer from './Definer'

export default class HediffDefiner extends Definer {
  protected type = 'HediffDef'
  protected attrs = {}
  protected declare defined: Hediff

  constructor(defName: string) {
    super(defName)
  }

  label(value: Hediff['label']) {
    this.defined.label = value
    return this
  }

  description(value: Hediff['description']) {
    this.defined.description = value
    return this
  }

  cureAllAtOnceIfCuredByItem(value: Hediff['cureAllAtOnceIfCuredByItem']) {
    this.defined.cureAllAtOnceIfCuredByItem = value
    return this
  }

  stages(values: Hediff['stages']) {
    this.defined.stages = values
    return this
  }

  comps(vales: Hediff['comps']) {
    this.defined.comps = vales
    return this
  }
}
