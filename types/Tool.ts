import {
  float,
  HediffDefName,
  SoundDefName,
  BodyPartGroupDefName,
  CustomName,
} from '.'

type ToolCapacityDefName = 'Blunt' | 'Poke' | CustomName
interface SurpriseAttackProps {}
interface ExtraDamage {}
export interface Tool {
  id: string

  /**
   * @todo [MustTranslate]
   */
  label: string

  /**
   * @todo [MustTranslate]
   */
  labelNoLocation: string

  /**
   * [TranslationHandle]
   */
  untranslatedLabel: string

  /**
   * @default true
   */
  labelUsedInLogging: boolean

  /**
   * @default List<ToolCapacityDef>()
   */
  capacities: Array<ToolCapacityDefName>

  power: float

  /**
   * @default -1f
   */
  armorPenetration: float

  cooldownTime: float

  surpriseAttack: SurpriseAttackProps

  hediff: HediffDefName

  /**
   * @default 1f
   */
  chanceFactor: float

  alwaysTreatAsWeapon: boolean

  extraMeleeDamages: Array<ExtraDamage>

  soundMeleeHit: SoundDefName

  soundMeleeMiss: SoundDefName

  linkedBodyPartsGroup: BodyPartGroupDefName

  ensureLinkedBodyPartsGroupAlwaysUsable: boolean

  cachedLabelCap: string
}
