export { ThingDef } from './ThingDef'

export type CustomName = `${string}_${string}`

export type ThingDefName = 'Steel' | 'ComponentIndustrial' | CustomName

export type FleckDefName = CustomName

export type EffecterDefName = 'Smith' | CustomName

export type BodyPartGroupDefName = CustomName

export type DamageDefName = CustomName

export type TaleDefName = CustomName

export type RulePackDefName = CustomName

export type MechWorkModeDefName = CustomName

export type BodyPartTagDefName = CustomName

export type HediffDefName = CustomName

export type ProjectileDefName =
  | 'Bullet_AssaultRifle'
  | `${string}_Bullet_${string}`

// TODO: to categories
export type SoundDefName =
  | 'Shot_AssaultRifle'
  | 'Recipe_Smith'
  | 'Interact_Rifle'
  | 'GunTail_Medium'
  | `${string}_${string}_${string}`

// #region
// TODO
export interface Thing {}
export interface StuffProperties {}
export interface ProjectileProperties {}
export interface PlantProperties {}
export interface RaceProperties {}
export interface ApparelProperties {}
export interface MoteProperties {}
export interface BuildingProperties {}
export interface GasProperties {}
export interface FilthProperties {}
export interface DefHyperlink {}
export interface DefModExtension {}
export interface ModContentPack {}

export interface Traversability {}
export interface ThingDefCountClass {}
export interface StuffCategoryDef {}
export interface CostListForDifficulty {}
export interface StyleCategoryDef {}
export interface TerrainAffordanceDef {}
export type ResearchProjectDefName =
  | 'Gunsmithing'
  | 'PrecisionRifling'
  | CustomName
export interface ColorForStuff {}
export interface ThingCategory {}
export interface DesignationCategoryDef {}
export interface DesignatorDropdownGroupDef {}
export interface KeyBindingDef {}
export interface IconForStuffAppearance {}
export interface Vector2 {}
export interface Vector3 {}
export interface PlaceWorker {}
export interface Graphic {}
export interface Texture2D {}
export interface StuffAppearanceDef {}
export interface TickerType {}
export interface IntVec2 {}
export interface IntVec3 {}
export interface CompProperties {} // TODO: Gen
export interface ThingDefCountRangeClass {}
export interface DamageMultiplier {}

export interface ThingFilter {}
export interface SkillRequirement {} // TODO: spec

export type SkillDefName = 'Crafting' | CustomName

export interface WorkTypeDef {}
export interface IntRange {}
export interface MemeDef {}
export interface FloatRange {}
export interface RecipeDef {}
export interface FactionDef {}
export interface OrderedTakeGroupDef {}

export interface ShaderTypeDef {}
export interface ShaderParameter {}
export interface AttachPoint {}

export interface ShadowData {}
export interface DamageGraphicData {}
export interface LinkDrawerType {}
export interface LinkFlags {}
export interface AsymmetricLinkData {}

export interface ColorGenerator {}
export interface ThingStyleChance {}
export interface InspectTabBase {}
export interface ResourceCountPriority {}
export interface ConceptDef {}
export interface ThingCategoryDef {}

export interface SurfaceType {}

export interface EquipmentType {}
export interface WeaponClassDef {}
export interface RulePackDef {}
export interface EntityCodexEntryDef {}
export interface IngestibleProperties {}
export interface IngredientProperties {}
export interface RitualFocusProperties {}
export interface PawnFlyerProperties {}
export interface SkyfallerProperties {}

export interface System {
  Type: unknown
}

export interface Dialog_InfoCard {
  Hyperlink: unknown
}

export type int = number
export type float = number
export type ushort = unknown
export type TaggedString = unknown
export type Regex = RegExp

export type Rot4 = unknown

export type Color = 'white'

export type StatDef = unknown // TODO:

// as Enum
export type Tradeability = 'All'

export type DrawerType = 'RealtimeOnly' | 'MapMeshOnly'

export type TechLevel =
  | 'Undefined'
  | 'Animal'
  | 'Neolithic'
  | 'Medieval'
  | 'Industrial'
  | 'Spacer'
  | 'Ultra'
  | 'Archotech'

export type AltitudeLayer =
  | 'Terrain'
  | 'TerrainScatter'
  | 'Floor'
  | 'Conduits'
  | 'FloorCoverings'
  | 'FloorEmplacement'
  | 'Filth'
  | 'Zone'
  | 'SmallWire'
  | 'LowPlant'
  | 'MoteLow'
  | 'Shadows'
  | 'DoorMoveable'
  | 'Building'
  | 'BuildingBelowTop'
  | 'BuildingOnTop'
  | 'Item'
  | 'ItemImportant'
  | 'LayingPawn'
  | 'PawnRope'
  | 'Projectile'
  | 'Pawn'
  | 'PawnUnused'
  | 'PawnState'
  | 'Blueprint'
  | 'MoteOverheadLow'
  | 'MoteOverhead'
  | 'Gas'
  | 'Skyfaller'
  | 'Weather'
  | 'LightingOverlay'
  | 'VisEffects'
  | 'FogOfWar'
  | 'Darkness'
  | 'WorldClipper'
  | 'Silhouettes'
  | 'MapDataOverlay'
  | 'MetaOverlays'
  | '_Count'
// #endregion
