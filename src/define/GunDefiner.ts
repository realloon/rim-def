import type { Gun } from '../types/def'
import type { I18n } from '../types/i18n'
import Definer from './Definer'

export default class GunDef extends Definer {
  protected type = 'ThingDef'
  protected attrs = { '@_ParentName': 'BaseHumanMakeableGun' }
  protected declare defined: Partial<Gun>

  constructor(defName: string) {
    super(defName)
  }

  label(value: Gun['label']): this
  label(value: I18n): this
  label(value: Gun['label'] | I18n) {
    this.defined.description =
      typeof value === 'string' ? value : value.default
    return this
  }

  description(value: Gun['description']): this
  description(value: I18n): this
  description(value: Gun['description'] | I18n) {
    this.defined.description =
      typeof value === 'string' ? value : value.default
    return this
  }

  techLevel(value: Gun['techLevel']) {
    this.defined.techLevel = value
    return this
  }

  graphicData(value: Gun['graphicData']) {
    this.defined.graphicData = value
    return this
  }

  soundInteract(value: Gun['soundInteract']) {
    this.defined.soundInteract = value
    return this
  }

  statBases(value: Gun['statBases']) {
    this.defined.statBases = value
    return this
  }

  /** 设定制作清单 */
  recipeMaker(value: Gun['recipeMaker']) {
    this.defined.recipeMaker = value
    return this
  }

  /** 设定材料花费 */
  costList(value: Gun['costList']) {
    this.defined.costList = value
    return this
  }

  /** 设定武器标签 */
  weaponTags(values: Gun['weaponTags']) {
    this.defined.weaponTags = values
    return this
  }

  verbs(values: Gun['verbs']) {
    this.defined.verbs = values
    return this
  }

  tools(values: Gun['tools']) {
    this.defined.tools = values
    return this
  }

  equippedStatOffsets(value: Gun['equippedStatOffsets']) {
    this.defined.equippedStatOffsets = value
    return this
  }
}
