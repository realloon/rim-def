import type { Sound } from '../types/def'
import Definer from './Definer'

export default class SoundDef extends Definer {
  protected type = 'SoundDef'
  protected attrs = {}
  protected declare defined: Sound

  constructor(defName: string) {
    super(defName)
  }

  context(value: Sound['context']) {
    this.defined.context = value
    return this
  }

  eventNames(value: Sound['eventNames']) {
    this.defined.eventNames = value
    return this
  }

  maxVoices(value: Sound['maxVoices']) {
    this.defined.maxSimultaneous = value
    return this
  }

  maxSimultaneous(value: Sound['maxSimultaneous']) {
    this.defined.maxSimultaneous = value
    return this
  }

  subSounds(values: Sound['subSounds']) {
    this.defined.subSounds = values
    return this
  }
}
