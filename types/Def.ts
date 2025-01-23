type Int = number
type Float = number

export interface Def {
  defName: string
  label: string
  description: string
  descriptionHyperlinks: Array<unknown>
}

export interface BuildableDef extends Def {
  statBases: Array<unknown>
  passability: unknown
  pathCost: Int
  pathCostIgnoreRepeat: boolean // true
  fertility: Float // -1f
  costList: Array<unknown>
  costStuffCount: Int
  stuffCategories: Array<unknown>
  stuffCategorySummary: string
  costListForDifficulty: unknown
  placingDraggableDimensions: Int
  clearBuildingArea: boolean // true
  defaultPlacingRot: unknown // Rot4.North
  resourcesFractionWhenDeconstructed: Float //  0.5f
  blocksAltitudes: Array<unknown>
  dominantStyleCategory: unknown
  isAltar: boolean
  useStuffTerrainAffordance: boolean
  terrainAffordanceNeeded: unknown
  buildingPrerequisites: Array<unknown>
  researchPrerequisites: Array<unknown>
  minMonolithLevel: Int
  constructionSkillPrerequisite: Int
  artisticSkillPrerequisite: Int
  minTechLevelToBuild: unknown
  maxTechLevelToBuild: unknown
  altitudeLayer: unknown // AltitudeLayer.Item
  repairEffect: unknown
  constructEffect: unknown
  colorPerStuff: Array<unknown>
  canGenerateDefaultDesignator: boolean // true
  ideoBuilding: boolean // true
  specialDisplayRadius: Float
  placeWorkers: Array<unknown>
  designationCategory: unknown
  designatorDropdown: unknown
  designationHotKey: unknown
  uiOrder: number //  2999f
  uiIconPath: string
  uiIconPathsStuff: Array<unknown>
  uiIconOffset: unknown
  uiIconColor: unknown // Color.white
  uiIconForStackCount: number // -1
  blueprintDef: unknown
  installBlueprintDef: unknown
  frameDef: unknown
  placeWorkersInstantiatedInt: Array<unknown>
  graphic: unknown
  uiIcon: unknown
  stuffUiIcons: Map<unknown, unknown>
  uiIconAngle: number //  int
  tmpCostList: Array<string>
  tmpHyperlinks: Array<unknown>
}

export interface ThingDef extends BuildableDef {
  thingClass: unknown
  category: unknown
  tickerType: unknown
  stackLimit: Int // 1
  size: unknown
  destroyable: boolean // true
  rotatable: boolean // true
  smallVolume: boolean
  useHitPoints: boolean // true
  receivesSignals: boolean
  comps: Array<unknown>
  virtualDefs: Array<unknown>
  virtualDefParent: unknown
  devNote: string
  killedLeavingsRanges: Array<unknown>
  killedLeavings: Array<unknown>
  killedLeavingsPlayerHostile: Array<unknown>
  killedLeavingsChance: Float //  1f
  forceLeavingsAllowed: boolean
  butcherProducts: Array<unknown>
  smeltProducts: Array<unknown>
  smeltable: boolean
  burnableByRecipe: boolean
  randomizeRotationOnSpawn: boolean
  damageMultipliers: Array<unknown>
  isTechHediff: boolean
  recipeMaker: unknown
  minifiedDef: unknown
  isUnfinishedThing: boolean
  leaveResourcesWhenKilled: boolean
  slagDef: unknown
  isFrameInt: boolean
  multipleInteractionCellOffsets: Array<unknown>
  interactionCellOffset: unknown // IntVec3.Zero
  hasInteractionCell: boolean
  interactionCellIcon: unknown
  interactionCellIconReverse: boolean
  filthLeaving: unknown
  forceDebugSpawnable: boolean
  intricate: boolean
  scatterableOnMapGen: boolean // true
  deepCommonality: Float
  deepCountPerCell: Int // 300
  deepCountPerPortion: Float //  -1
  deepLumpSizeRange: unknown // IntRange.zero
  generateCommonality: number //float 1f
  generateAllowChance: number //float 1f
  canOverlapZones: boolean // true
  startingHpRange: unknown // FloatRange.One
  thingSetMakerTags: Array<string>
  alwaysFlee: boolean
  recipes: Array<unknown>
  messageOnDeteriorateInStorage: boolean // true
  deteriorateFromEnvironmentalEffects: boolean // true
  canDeteriorateUnspawned: boolean
  canLoadIntoCaravan: boolean // true
  isMechClusterThreat: boolean
  displayNumbersBetweenSameDefDistRange: unknown // FloatRange.Zero
  minRewardCount: Int // 1
  preventSkyfallersLandingOn: boolean
  requiresFactionToAcquire: unknown
  relicChance: Float
  orderedTakeGroup: unknown
  allowedArchonexusCount: Int
  possessionCount: Int
  notifyMapRemoved: boolean
  canScatterOver: boolean // true
  genericMarketSellable: boolean // true
  drawHighlight: boolean
  highlightColor: unknown // ?
  autoTargetNearbyIdenticalThings: boolean
  preventDroppingThingsOn: boolean
  hiddenWhileUndiscovered: boolean
  disableImpassableShotOverConfigError: boolean
  showInSearch: boolean // = true
  graphicData: unknown
  drawerType: unknown // DrawerType.RealtimeOnly
  drawOffscreen: boolean
  colorGenerator: unknown
  hideAtSnowDepth: Float //  99999f
  drawDamagedOverlay: boolean // true
  castEdgeShadows: boolean
  staticSunShadowHeight: Float
  useSameGraphicForGhost: boolean
  useBlueprintGraphicAsGhost: boolean
  randomStyle: Array<unknown>
  randomStyleChance: Float
  canEditAnyStyle: boolean
  defaultStuff: unknown
  killedLeavingsExpandRect: Int
  minifiedDrawScale: Float //  1f
  overrideMinifiedRot: unknown // Rot4.Invalid
  minifiedDrawOffset: unknown // Vector3.zero
  deselectedSelectionBracketFactor: Float //  1f
  selectable: boolean
  containedPawnsSelectable: boolean
  containedItemsSelectable: boolean
  neverMultiSelect: boolean
  isAutoAttackableMapObject: boolean
  hasTooltip: boolean
  inspectorTabs: Array<unknown>
  inspectorTabsResolved: Array<unknown>
  seeThroughFog: boolean
  drawGUIOverlay: boolean
  drawGUIOverlayQuality: boolean //  = true
  resourceReadoutPriority: unknown
  resourceReadoutAlwaysShow: boolean
  drawPlaceWorkersWhileSelected: boolean
  drawPlaceWorkersWhileInstallBlueprintSelected: boolean
  storedConceptLearnOpportunity: unknown
  uiIconScale: Float //  1f
  hasCustomRectForSelector: boolean
  hideStats: boolean
  hideInspect: boolean
  onlyShowInspectString: boolean
  hideMainDesc: boolean
  alwaysHaulable: boolean
  designateHaulable: boolean
  thingCategories: Array<unknown>
  mineable: boolean
  socialPropernessMatters: boolean
  stealable: boolean //  = true
  soundSpawned: unknown
  soundDrop: unknown
  soundPickup: unknown
  soundInteract: unknown
  soundImpactDefault: unknown
  soundPlayInstrument: unknown
  soundOpen: unknown
  saveCompressible: boolean
  isSaveable: boolean //  = true
  holdsRoof: boolean
  fillPercent: Float
  coversFloor: boolean
  neverOverlapFloors: boolean
  surfaceType: unknown
  wipesPlants: boolean
  blockPlants: boolean
  blockLight: boolean
  blockWind: boolean
  blockWeather: boolean
  tradeability: unknown // Tradeability.All
  tradeTags: Array<unknown>
  tradeNeverStack: boolean
  tradeNeverGenerateStacked: boolean
  healthAffectsPrice: boolean //  = true
  colorGeneratorInTraderStock: unknown
  verbs: Array<unknown>
  tools: Array<unknown>
  equippedAngleOffset: Float
  equippedDistanceOffset: Float
  equipmentType: unknown
  techLevel: unknown
  weaponClasses: Array<unknown>
  weaponTags: Array<string>
  techHediffsTags: Array<string>
  violentTechHediff: boolean
  destroyOnDrop: boolean
  equippedStatOffsets: Array<unknown>
  meleeHitSound: unknown
  recoilPower: number // 1f
  recoilRelaxation: number // 10f
  rotateInShelves: boolean // true
  mergeVerbGizmos: boolean // true
  entityDefToBuild: unknown
  projectileWhenLoaded: unknown
  ideoBuildingNamerBase: unknown
  entityCodexEntry: unknown
  ingestible: unknown
  filth: unknown
  gas: unknown
  building: unknown
  race: unknown
  apparel: unknown
  mote: unknown
  plant: unknown
  projectile: unknown
  stuffProps: unknown
  skyfaller: unknown
  pawnFlyer: unknown
  ritualFocus: unknown
  ingredient: unknown
  canBeUsedUnderRoof: boolean // true
  descriptionDetailedCached: string
  interactionCellGraphic: unknown
  isNaturalOrganCached: boolean // ?
  hasSunShadowsCached: boolean // ?
  cachedRelevantStyleCategories: Array<unknown>
  SmallUnitPerVolume: Int // 10
  SmallVolumePerUnit: Float //  0.1f
  ArchonexusMaxItemStackMass: Float //  5f
  ArchonexusMaxItemStackCount: Int // 25
  ArchonexusMaxItemStackValue: Float //  2000f
  ArchonexusAutoCalculateValue: Int // -1
  allRecipesCached: Array<unknown>
  EmptyVerbPropertiesList: Array<unknown>
  concreteExamplesInt: Map<unknown, unknown>
}

export interface SoundDef extends Def {
  sustain: boolean
  context: unknown
  eventNames: Array<string>
  maxVoices: Int // 4
  maxSimultaneous: Int // 3
  priorityMode: unknown
  slot: string // ""
  sustainStartSound: SoundDef
  sustainStopSound: SoundDef
  sustainFadeoutTime: Float
  sustainFadeoutStartSound: SoundDef
  subSounds: Array<unknown>
  isUndefined: boolean
  testSustainer: unknown
}

export interface AbilityDef extends Def {
  abilityClass: unknown // typeof (Ability)
  gizmoClass: unknown // typeof (Command_Ability)
  comps: Array<unknown> // <AbilityCompProperties>
  category: unknown
  displayOrder: Int
  statBases: Array<unknown>
  verbProperties: unknown
  hotKey: unknown
  jobDef: unknown
  warmupMote: ThingDef
  warmupEffecter: unknown
  emittedFleck: unknown
  emissionInterval: Int
  warmupMoteSocialSymbol: string
  warmupStartSound: SoundDef
  warmupSound: SoundDef
  warmupPreEndSound: SoundDef
  warmupPreEndSoundSeconds: Float
  moteDrawOffset: unknown
  moteOffsetAmountTowardsTarget: Float
  canUseAoeToGetTargets: boolean // true
  useAverageTargetPositionForWarmupEffecter: boolean
  targetRequired: boolean // true
  targetWorldCell: boolean
  showGizmoOnWorldView: boolean
  aiCanUse: boolean
  ai_SearchAOEForTargets: boolean
  ai_IsOffensive: boolean // true
  ai_IsIncendiary: boolean // true
  groupAbility: boolean
  level: Int
  cooldownTicksRange: unknown
  cooldownPerCharge: boolean
  hasExternallyHandledCooldown: boolean
  charges: Int //  -1
  groupDef: unknown
  overrideGroupCooldown: boolean
  requiredMemes: Array<unknown>
  sendLetterOnCooldownComplete: boolean
  sendMessageOnCooldownComplete: boolean
  displayGizmoWhileUndrafted: boolean
  disableGizmoWhileUndrafted: boolean // true
  writeCombatLog: boolean
  stunTargetWhileCasting: boolean
  showPsycastEffects: boolean // true
  showCastingProgressBar: boolean
  detectionChanceOverride: Float // -1f
  uiOrder: Float
  waitForJobEnd: boolean
  showWhenDrafted: boolean // true
  showOnCharacterCard: boolean // true
  hostile: boolean // true
  casterMustBeCapableOfViolence: boolean // true
  confirmationDialogText: string
  iconPath: string
  uiIcon: unknown // BaseContent.BadTex
  cachedTooltip: string
  cachedTooltipPawn: unknown
  cachedTargets: Array<string>
  requiredPsyfocusBandCached: Int // -1
  anyCompOverridesPsyfocusCost: boolean // ?
  psyfocusCostRange: unknown
  psyfocusCostPercent: string
  psyfocusCostPercentMax: string
  warmupMoteSocialSymbolCached: unknown
}
