import type { Ability } from '../types/def'
import Definer from './Definer'

export default class AbilityDefiner extends Definer {
  protected type = 'AbilityDef'
  protected attrs = {}
  protected declare defined: Ability

  constructor(defName: string) {
    super(defName)
  }

  label(value: Ability['label']) {
    this.defined.label = value
    return this
  }

  description(value: Ability['description']) {
    this.defined.description = value
    return this
  }
  iconPath(value: Ability['iconPath']) {
    this.defined.iconPath = value
    return this
  }
  aiCanUse(value: Ability['aiCanUse']) {
    this.defined.aiCanUse = value
    return this
  }
  ai_IsIncendiary(value: Ability['ai_IsIncendiary']) {
    this.defined.ai_IsIncendiary = value
    return this
  }
  warmupStartSound(value: Ability['warmupStartSound']) {
    this.defined.warmupStartSound = value
    return this
  }
  showOnCharacterCard(value: Ability['showOnCharacterCard']) {
    this.defined.showOnCharacterCard = value
    return this
  }
  verbProperties(value: Ability['verbProperties']) {
    this.defined.verbProperties = value
    return this
  }

  comps(value: Ability['comps']) {
    this.defined.comps = value
    return this
  }
}
