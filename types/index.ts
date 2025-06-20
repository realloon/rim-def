interface Editable {}

interface Def extends Editable {
  /**
   * The name of this Def. It is used as an identifier by the game code.
   * @default 'UnnamedDef'
   * */
  defName: string

  /**
   * A human-readable label used to identify this in game.
   * @default null
   * @todo MustTranslate
   */
  label: string

  /**
   * A human-readable description given when the Def is inspected by players.
   * @default null
   * @todo MustTranslate
   */
  description: string

  /**
   * [XmlInheritanceAllowDuplicateNodes]
   */
  descriptionHyperlinks: Array<DefHyperlink>

  /**
   * Disables config error checking. Intended for mod use. (Be careful!)
   * @default false
   * @todo MustTranslate?
   */
  ignoreConfigErrors: boolean

  ignoreIllegalLabelCharacterConfigError: boolean

  /**
   * Mod-specific data. Not used by core game code.
   * @default null
   */
  modExtensions: Array<DefModExtension>

  shortHash: ushort

  /**
   * @default ushort.MaxValue
   */
  index: ushort

  modContentPack: ModContentPack

  fileName: string

  /**
   * @default (TaggedString) (string) null
   */
  cachedLabelCap: TaggedString

  generated: boolean

  /**
   * @default (ushort) Rand.RangeInclusive(0, (int) ushort.MaxValue)
   */
  debugRandomId: ushort

  /**
   * @default UnnamedDef
   */
  DefaultDefName: string

  AllowedDefNamesRegex: Regex // private static readonly Regex AllowedDefNamesRegex = new Regex("^[a-zA-Z0-9\\-_]*$");

  DisallowedLabelCharsRegex: Regex // private static readonly Regex DisallowedLabelCharsRegex = new Regex("\\[|\\]|\\{|\\}");
}

interface BuildableDef extends Def {
  statBases: Array<StatModifier>

  passability: Traversability

  pathCost: int

  /**
   * @default true
   */
  pathCostIgnoreRepeat: boolean

  /**
   * @default -1f
   */
  fertility: float

  costList: Array<ThingDefCountClass>

  costStuffCount: int

  stuffCategories: Array<StuffCategoryDef>

  /**
   * @todo MustTranslate
   */
  stuffCategorySummary: string

  costListForDifficulty: CostListForDifficulty

  placingDraggableDimensions: int

  /**
   * @default true
   */
  clearBuildingArea: boolean

  /**
   * @default Rot4.North
   */
  defaultPlacingRot: Rot4

  /**
   * @default 0.5f
   */
  resourcesFractionWhenDeconstructed: float

  blocksAltitudes: Array<AltitudeLayer>

  dominantStyleCategory: StyleCategoryDef

  isAltar: boolean

  useStuffTerrainAffordance: boolean

  terrainAffordanceNeeded: TerrainAffordanceDef

  buildingPrerequisites: Array<ThingDef>

  researchPrerequisites: Array<ResearchProjectDef>

  minMonolithLevel: int

  constructionSkillPrerequisite: int

  artisticSkillPrerequisite: int

  minTechLevelToBuild: TechLevel

  maxTechLevelToBuild: TechLevel

  /**
   * @default AltitudeLayer.Item as 'Item'
   */
  altitudeLayer: AltitudeLayer

  repairEffect: EffecterDef

  constructEffect: EffecterDef

  colorPerStuff: Array<ColorForStuff>

  /**
   * @default true
   */
  canGenerateDefaultDesignator: boolean

  ideoBuilding: boolean

  specialDisplayRadius: float

  placeWorkers: Array<System['Type']>

  designationCategory: DesignationCategoryDef

  designatorDropdown: DesignatorDropdownGroupDef

  designationHotKey: KeyBindingDef

  /**
   * @default 2999f
   */
  uiOrder: float

  /**
   * [NoTranslate]
   */
  uiIconPath: string

  uiIconPathsStuff: Array<IconForStuffAppearance>

  uiIconOffset: Vector2

  /**
   * @default Color.white
   */
  uiIconColor: Color

  /**
   * @default -1
   */
  uiIconForStackCount: int

  blueprintDef: ThingDef

  installBlueprintDef: ThingDef

  frameDef: ThingDef

  placeWorkersInstantiatedInt: Array<PlaceWorker>

  /**
   * @default BaseContent.BadGraphic
   */
  graphic: Graphic

  /**
   * @default BaseContent.BadTex
   */
  uiIcon: Texture2D

  stuffUiIcons: Map<StuffAppearanceDef, Texture2D>

  uiIconAngle: float

  /**
   * @default []
   */
  tmpCostList: Array<string>

  tmpHyperlinks: Array<Dialog_InfoCard['Hyperlink']>
}

interface ThingDef extends BuildableDef {
  thingClass: System['Type']

  category: ThingCategory

  tickerType: TickerType

  /**
   * @default 1
   */
  stackLimit: int

  /**
   * @default IntVec2.One
   */
  size: IntVec2

  /**
   * @default true
   */
  destroyable: boolean

  /**
   * @default true
   */
  rotatable: boolean

  smallVolume: boolean

  useHitPoints: boolean

  receivesSignals: boolean

  /**
   * @default []
   */
  comps: Array<CompProperties>

  /**
   * @default []
   */
  virtualDefs: Array<ThingDef>

  virtualDefParent: ThingDef

  /**
   * [NoTranslate]
   */
  devNote: string

  killedLeavingsRanges: Array<ThingDefCountRangeClass>

  killedLeavings: Array<ThingDefCountClass>

  killedLeavingsPlayerHostile: Array<ThingDefCountClass>

  /**
   * @default 1f
   */
  killedLeavingsChance: float

  forceLeavingsAllowed: boolean

  butcherProducts: Array<ThingDefCountClass>

  smeltProducts: Array<ThingDefCountClass>

  smeltable: boolean

  burnableByRecipe: boolean

  randomizeRotationOnSpawn: boolean

  damageMultipliers: Array<DamageMultiplier>

  isTechHediff: boolean

  recipeMaker: RecipeMakerProperties

  minifiedDef: ThingDef

  isUnfinishedThing: boolean

  leaveResourcesWhenKilled: boolean

  slagDef: ThingDef

  isFrameInt: boolean

  multipleInteractionCellOffsets: Array<IntVec3>

  /**
   * @default IntVec3.Zero
   */
  interactionCellOffset: IntVec2

  hasInteractionCell: boolean

  interactionCellIcon: ThingDef

  interactionCellIconReverse: boolean

  filthLeaving: ThingDef

  forceDebugSpawnable: boolean

  intricate: boolean

  /**
   * @default true
   */
  scatterableOnMapGen: boolean

  deepCommonality: float

  /**
   * @default 300
   */
  deepCountPerCell: int

  /**
   * @default -1
   */
  deepCountPerPortion: int

  /**
   * @default IntRange.zero
   */
  deepLumpSizeRange: IntRange

  /**
   * @default 1f
   */
  generateCommonality: float

  /**
   * @default 1f
   */
  generateAllowChance: float

  /**
   * @default true
   */
  canOverlapZones: boolean

  /**
   * @default FloatRange.One
   */
  startingHpRange: FloatRange

  /**
   * [NoTranslate]
   */
  thingSetMakerTags: Array<string>

  alwaysFlee: boolean

  recipes: Array<RecipeDef>

  /**
   * @default true
   */
  messageOnDeteriorateInStorage: boolean

  /**
   * @default true
   */
  deteriorateFromEnvironmentalEffects: boolean

  canDeteriorateUnspawned: boolean

  /**
   * @default true
   */
  canLoadIntoCaravan: boolean

  isMechClusterThreat: boolean

  /**
   * @default FloatRange.Zero
   */
  displayNumbersBetweenSameDefDistRange: FloatRange

  /**
   * @default 1
   */
  minRewardCount: int

  preventSkyfallersLandingOn: boolean

  requiresFactionToAcquire: FactionDef

  relicChance: float

  orderedTakeGroup: OrderedTakeGroupDef

  allowedArchonexusCount: int

  possessionCount: int

  notifyMapRemoved: boolean

  /**
   * @default true
   */
  canScatterOver: boolean

  /**
   * @default true
   */
  genericMarketSellable: boolean

  drawHighlight: boolean

  highlightColor: Color | undefined // ?

  autoTargetNearbyIdenticalThings: boolean

  preventDroppingThingsOn: boolean

  hiddenWhileUndiscovered: boolean

  disableImpassableShotOverConfigError: boolean

  /**
   * @default true
   */
  showInSearch: boolean

  graphicData: GraphicData

  /**
   * @default DrawerType.RealtimeOnly
   */
  drawerType: DrawerType

  drawOffscreen: boolean

  colorGenerator: ColorGenerator

  /**
   * @default 99999f
   */
  hideAtSnowDepth: float

  /**
   * @default true
   */
  drawDamagedOverlay: boolean

  castEdgeShadows: boolean

  staticSunShadowHeight: float

  useSameGraphicForGhost: boolean

  useBlueprintGraphicAsGhost: boolean

  randomStyle: Array<ThingStyleChance>

  randomStyleChance: float

  canEditAnyStyle: boolean

  defaultStuff: ThingDef

  killedLeavingsExpandRect: int

  /**
   * @default 1f
   */
  minifiedDrawScale: float

  /**
   * @default Rot4.Invalid
   */
  overrideMinifiedRot: Rot4

  /**
   * @default Vector3.zero
   */
  minifiedDrawOffset: IntVec3

  /**
   * @default 1f
   */
  deselectedSelectionBracketFactor: float

  selectable: boolean

  containedPawnsSelectable: boolean

  containedItemsSelectable: boolean

  neverMultiSelect: boolean

  isAutoAttackableMapObject: boolean

  hasTooltip: boolean

  inspectorTabs: Array<System['Type']>

  inspectorTabsResolved: Array<InspectTabBase>

  seeThroughFog: boolean

  drawGUIOverlay: boolean

  /**
   * @default true
   */
  drawGUIOverlayQuality: boolean

  resourceReadoutPriority: ResourceCountPriority

  resourceReadoutAlwaysShow: boolean

  drawPlaceWorkersWhileSelected: boolean

  drawPlaceWorkersWhileInstallBlueprintSelected: boolean

  storedConceptLearnOpportunity: ConceptDef

  /**
   * @default 1f
   */
  uiIconScale: float

  hasCustomRectForSelector: boolean

  hideStats: boolean

  hideInspect: boolean

  onlyShowInspectString: boolean

  hideMainDesc: boolean

  alwaysHaulable: boolean

  designateHaulable: boolean

  thingCategories: Array<ThingCategoryDef>

  mineable: boolean

  socialPropernessMatters: boolean

  /**
   * @default true
   */
  stealable: boolean

  soundSpawned: SoundDef

  soundDrop: SoundDef

  soundPickup: SoundDef

  soundInteract: SoundDef

  soundImpactDefault: SoundDef

  soundPlayInstrument: SoundDef

  soundOpen: SoundDef

  saveCompressible: boolean

  /**
   * @default true
   */
  isSaveable: boolean

  holdsRoof: boolean

  fillPercent: float

  coversFloor: boolean

  neverOverlapFloors: boolean

  surfaceType: SurfaceType

  wipesPlants: boolean

  blockPlants: boolean

  blockLight: boolean

  blockWind: boolean

  blockWeather: boolean

  tradeability: Tradeability

  /**
   * @todo [NoTranslate]
   */
  tradeTags: Array<string>

  tradeNeverStack: boolean

  tradeNeverGenerateStacked: boolean

  /**
   * @default true
   */
  healthAffectsPrice: boolean

  colorGeneratorInTraderStock: ColorGenerator

  verbs: Array<VerbProperties>

  tools: Array<Tool>

  equippedAngleOffset: float

  equippedDistanceOffset: float

  equipmentType: EquipmentType

  techLevel: TechLevel

  weaponClasses: Array<WeaponClassDef>

  /**
   * @todo [NoTranslate]
   */
  weaponTags: Array<string>

  /**
   * @todo [NoTranslate]
   */
  techHediffsTags: Array<string>

  violentTechHediff: boolean

  destroyOnDrop: boolean

  equippedStatOffsets: Array<StatModifier>

  meleeHitSound: SoundDef

  /**
   * @default 1f
   */
  recoilPower: float

  /**
   * @default 10f
   */
  recoilRelaxation: float

  /**
   * @default true
   */
  rotateInShelves: boolean

  /**
   * @default true
   */
  mergeVerbGizmos: boolean

  entityDefToBuild: BuildableDef

  projectileWhenLoaded: ThingDef

  ideoBuildingNamerBase: RulePackDef

  entityCodexEntry: EntityCodexEntryDef

  ingestible: IngestibleProperties

  filth: FilthProperties

  gas: GasProperties

  building: BuildingProperties

  race: RaceProperties

  apparel: ApparelProperties

  mote: MoteProperties

  plant: PlantProperties

  projectile: ProjectileProperties

  stuffProps: StuffProperties

  skyfaller: SkyfallerProperties

  pawnFlyer: PawnFlyerProperties

  ritualFocus: RitualFocusProperties

  ingredient: IngredientProperties

  /**
   * @default true
   */
  canBeUsedUnderRoof: boolean

  descriptionDetailedCached: string

  interactionCellGraphic: Graphic

  isNaturalOrganCached: boolean | undefined

  hasSunShadowsCached: boolean | undefined

  cachedRelevantStyleCategories: Array<StyleCategoryDef>

  allRecipesCached: Array<RecipeDef>

  /**
   * @default []
   */
  EmptyVerbPropertiesList: Array<VerbProperties>

  concreteExamplesInt: Map<ThingDef, Thing>
}

// #region
// TODO
interface Thing {}
interface StuffProperties {}
interface ProjectileProperties {}
interface PlantProperties {}
interface RaceProperties {}
interface ApparelProperties {}
interface MoteProperties {}
interface BuildingProperties {}
interface GasProperties {}
interface FilthProperties {}
interface DefHyperlink {}
interface DefModExtension {}
interface ModContentPack {}
interface StatModifier {}
interface Traversability {}
interface ThingDefCountClass {}
interface StuffCategoryDef {}
interface CostListForDifficulty {}
interface StyleCategoryDef {}
interface TerrainAffordanceDef {}
interface ResearchProjectDef {}
interface EffecterDef {}
interface ColorForStuff {}
interface ThingCategory {}
interface DesignationCategoryDef {}
interface DesignatorDropdownGroupDef {}
interface KeyBindingDef {}
interface IconForStuffAppearance {}
interface Vector2 {}
interface PlaceWorker {}
interface Graphic {}
interface Texture2D {}
interface StuffAppearanceDef {}
interface TickerType {}
interface IntVec2 {}
interface IntVec3 {}
interface CompProperties {}
interface ThingDefCountRangeClass {}
interface DamageMultiplier {}
interface RecipeMakerProperties {}
interface IntRange {}
interface FloatRange {}
interface RecipeDef {}
interface FactionDef {}
interface OrderedTakeGroupDef {}
interface GraphicData {}
interface ColorGenerator {}
interface ThingStyleChance {}
interface InspectTabBase {}
interface ResourceCountPriority {}
interface ConceptDef {}
interface ThingCategoryDef {}
interface SoundDef {}
interface SurfaceType {}
interface VerbProperties {}
interface Tool {}
interface EquipmentType {}
interface WeaponClassDef {}
interface RulePackDef {}
interface EntityCodexEntryDef {}
interface IngestibleProperties {}
interface IngredientProperties {}
interface RitualFocusProperties {}
interface PawnFlyerProperties {}
interface SkyfallerProperties {}

interface System {
  Type: unknown
}

interface Dialog_InfoCard {
  Hyperlink: unknown
}

type int = number
type float = number
type ushort = unknown
type TaggedString = unknown
type Regex = RegExp

enum Rot4 {}

enum Color {
  white = 'white',
}

enum DrawerType {
  RealtimeOnly = 'RealtimeOnly',
}

enum Tradeability {
  All = 'All',
}

// as enum
type TechLevel =
  | 'Undefined'
  | 'Animal'
  | 'Neolithic'
  | 'Medieval'
  | 'Industrial'
  | 'Spacer'
  | 'Ultra'
  | 'Archotech'

type AltitudeLayer =
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
