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
} from './builtIn'
import { ApparelReloadable } from './comp'

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

// TODO: Apparel
// {
//   comps: Array<ApparelReloadable>
// }
