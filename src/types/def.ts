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
  Verbs,
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
  Verbs &
  Tools &
  EquippedStatOffsets &
  ThingSetMakerTags & { comps: Array<any> } // TODO:

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
    verbProperties: {
      verbClass: 'Verb_CastAbility'
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
  }
