import type { Hediff } from '../types/def'
import Definer from './Definer'

export default class HediffDefiner extends Definer {
  protected type = 'HediffDef'
  protected attrs = {}
  protected declare defined: Hediff

  constructor(defName: string) {
    super(defName)
  }

  context(value: Hediff['label']) {
    this.defined.label = value
    return this
  }

  eventNames(value: Hediff['description']) {
    this.defined.description = value
    return this
  }

  maxVoices(value: Hediff['cureAllAtOnceIfCuredByItem']) {
    this.defined.cureAllAtOnceIfCuredByItem = value
    return this
  }

  maxSimultaneous(values: Hediff['stages']) {
    this.defined.stages = values
    return this
  }

  comps(vales: Hediff['comps']) {
    this.defined.comps = vales
    return this
  }
}
