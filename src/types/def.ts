import type {
  DefName,
  Label,
  GraphicData,
  Category,
  TickerType,
  AltitudeLayer,
  ThingClass,
  UseHitPoints,
  NeverMultiSelect,
  Projectile,
  Description,
  TechLevel,
  SoundInteract,
  StatBases,
  RecipeMaker,
  CostList,
  WeaponTags,
  Tools,
  EquippedStatOffsets,
  ThingSetMakerTags,
  Context,
  EventNames,
  MaxVoices,
  MaxSimultaneous,
  SubSounds,
  IconPath,
} from './builtIn'
import { Burnable, Firespewable } from './comp'
import { VerbShoot } from './verb'

export type Bullet = DefName &
  Label &
  GraphicData &
  Category &
  TickerType &
  AltitudeLayer &
  ThingClass &
  UseHitPoints &
  NeverMultiSelect &
  Projectile

export type Gun = DefName &
  Label &
  Description &
  TechLevel &
  GraphicData &
  SoundInteract &
  StatBases &
  RecipeMaker &
  CostList &
  WeaponTags &
  Tools &
  EquippedStatOffsets & // TODO:
  ThingSetMakerTags & { comps: Array<any> } & {
    verbs: Array<VerbShoot>
  }

export type Sound = DefName &
  Context &
  EventNames &
  MaxVoices &
  MaxSimultaneous &
  SubSounds

export type Ability = DefName &
  Label &
  Description &
  IconPath & {
    aiCanUse: boolean
    ai_IsIncendiary: true
    warmupStartSound: 'FireSpew_Warmup'
    showOnCharacterCard: false
    cooldownTicksRange: string
    verbProperties: {
      verbClass: 'Verb_CastAbility' | 'Verb_AbilityShoot'
      requireLineOfSight: boolean
      range: number
      warmupTime: number
      soundCast: 'FireSpew_Resolve'
      targetParams: {
        canTargetLocations: boolean
      }
      flammabilityAttachFireChanceCurve: {
        points: Array<string>
      }
    }
  } & {
    comps: Array<Burnable | Firespewable>
  } & {
    verbs: Array<any>
  }
