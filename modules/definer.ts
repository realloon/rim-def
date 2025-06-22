import { ThingDef } from '../types'

type Builder<T> = {
  [K in keyof T]: (value: NonNullable<T[K]>) => Builder<T>
}

const definer: Builder<ThingDef> = {
  _Name(value) {
    throw new Error('Function not implemented.')
  },

  _ParentName(value) {
    throw new Error('Function not implemented.')
  },

  _Abstract(value) {
    throw new Error('Function not implemented.')
  },

  label(value) {
    console.log(`input: ${value}`)
    return definer
  },

  thingClass(value) {
    throw new Error('Function not implemented.')
  },

  category(value) {
    throw new Error('Function not implemented.')
  },

  tickerType(value) {
    throw new Error('Function not implemented.')
  },

  stackLimit(value) {
    throw new Error('Function not implemented.')
  },

  size(value) {
    throw new Error('Function not implemented.')
  },

  destroyable(value) {
    throw new Error('Function not implemented.')
  },

  rotatable(value) {
    throw new Error('Function not implemented.')
  },

  smallVolume(value) {
    throw new Error('Function not implemented.')
  },

  useHitPoints(value) {
    throw new Error('Function not implemented.')
  },

  receivesSignals(value) {
    throw new Error('Function not implemented.')
  },

  comps(value) {
    throw new Error('Function not implemented.')
  },

  virtualDefs(value) {
    throw new Error('Function not implemented.')
  },

  virtualDefParent(value) {
    throw new Error('Function not implemented.')
  },

  devNote(value) {
    throw new Error('Function not implemented.')
  },

  killedLeavingsRanges(value) {
    throw new Error('Function not implemented.')
  },

  killedLeavings(value) {
    throw new Error('Function not implemented.')
  },

  killedLeavingsPlayerHostile: function (
    value: ThingDef['killedLeavingsPlayerHostile']
  ) {
    throw new Error('Function not implemented.')
  },

  killedLeavingsChance(value) {
    throw new Error('Function not implemented.')
  },

  forceLeavingsAllowed(value) {
    throw new Error('Function not implemented.')
  },

  butcherProducts(value) {
    throw new Error('Function not implemented.')
  },

  smeltProducts(value) {
    throw new Error('Function not implemented.')
  },

  smeltable(value) {
    throw new Error('Function not implemented.')
  },

  burnableByRecipe(value) {
    throw new Error('Function not implemented.')
  },

  randomizeRotationOnSpawn: function (
    value: ThingDef['randomizeRotationOnSpawn']
  ) {
    throw new Error('Function not implemented.')
  },

  damageMultipliers(value) {
    throw new Error('Function not implemented.')
  },

  isTechHediff(value) {
    throw new Error('Function not implemented.')
  },

  recipeMaker(value) {
    throw new Error('Function not implemented.')
  },

  minifiedDef(value) {
    throw new Error('Function not implemented.')
  },

  isUnfinishedThing(value) {
    throw new Error('Function not implemented.')
  },

  leaveResourcesWhenKilled(value) {
    throw new Error('Function not implemented.')
  },

  slagDef(value) {
    throw new Error('Function not implemented.')
  },

  isFrameInt(value) {
    throw new Error('Function not implemented.')
  },

  multipleInteractionCellOffsets(value) {
    throw new Error('Function not implemented.')
  },

  interactionCellOffset(value) {
    throw new Error('Function not implemented.')
  },

  hasInteractionCell(value) {
    throw new Error('Function not implemented.')
  },

  interactionCellIcon(value) {
    throw new Error('Function not implemented.')
  },

  interactionCellIconReverse(value) {
    throw new Error('Function not implemented.')
  },

  filthLeaving(value) {
    throw new Error('Function not implemented.')
  },

  forceDebugSpawnable(value) {
    throw new Error('Function not implemented.')
  },

  intricate(value) {
    throw new Error('Function not implemented.')
  },

  scatterableOnMapGen(value) {
    throw new Error('Function not implemented.')
  },

  deepCommonality(value) {
    throw new Error('Function not implemented.')
  },

  deepCountPerCell(value) {
    throw new Error('Function not implemented.')
  },

  deepCountPerPortion(value) {
    throw new Error('Function not implemented.')
  },

  deepLumpSizeRange(value) {
    throw new Error('Function not implemented.')
  },

  generateCommonality(value) {
    throw new Error('Function not implemented.')
  },

  generateAllowChance(value) {
    throw new Error('Function not implemented.')
  },

  canOverlapZones(value) {
    throw new Error('Function not implemented.')
  },

  startingHpRange(value) {
    throw new Error('Function not implemented.')
  },

  thingSetMakerTags(value) {
    throw new Error('Function not implemented.')
  },

  alwaysFlee(value) {
    throw new Error('Function not implemented.')
  },

  recipes(value) {
    throw new Error('Function not implemented.')
  },

  messageOnDeteriorateInStorage(value) {
    throw new Error('Function not implemented.')
  },

  deteriorateFromEnvironmentalEffects(value) {
    throw new Error('Function not implemented.')
  },

  canDeteriorateUnspawned(value) {
    throw new Error('Function not implemented.')
  },

  canLoadIntoCaravan(value) {
    throw new Error('Function not implemented.')
  },

  isMechClusterThreat(value) {
    throw new Error('Function not implemented.')
  },

  displayNumbersBetweenSameDefDistRange(value) {
    throw new Error('Function not implemented.')
  },

  minRewardCount(value) {
    throw new Error('Function not implemented.')
  },

  preventSkyfallersLandingOn(value) {
    throw new Error('Function not implemented.')
  },

  requiresFactionToAcquire(value) {
    throw new Error('Function not implemented.')
  },

  relicChance(value) {
    throw new Error('Function not implemented.')
  },

  orderedTakeGroup(value) {
    throw new Error('Function not implemented.')
  },

  allowedArchonexusCount(value) {
    throw new Error('Function not implemented.')
  },

  possessionCount(value) {
    throw new Error('Function not implemented.')
  },

  notifyMapRemoved(value) {
    throw new Error('Function not implemented.')
  },

  canScatterOver(value) {
    throw new Error('Function not implemented.')
  },

  genericMarketSellable(value) {
    throw new Error('Function not implemented.')
  },

  drawHighlight(value) {
    throw new Error('Function not implemented.')
  },

  highlightColor(value) {
    throw new Error('Function not implemented.')
  },

  autoTargetNearbyIdenticalThings(value) {
    throw new Error('Function not implemented.')
  },

  preventDroppingThingsOn(value) {
    throw new Error('Function not implemented.')
  },

  hiddenWhileUndiscovered(value) {
    throw new Error('Function not implemented.')
  },

  disableImpassableShotOverConfigError(value) {
    throw new Error('Function not implemented.')
  },

  showInSearch(value) {
    throw new Error('Function not implemented.')
  },

  graphicData(value) {
    throw new Error('Function not implemented.')
  },

  drawerType(value) {
    throw new Error('Function not implemented.')
  },

  drawOffscreen(value) {
    throw new Error('Function not implemented.')
  },

  colorGenerator(value) {
    throw new Error('Function not implemented.')
  },

  hideAtSnowDepth(value) {
    throw new Error('Function not implemented.')
  },

  drawDamagedOverlay(value) {
    throw new Error('Function not implemented.')
  },

  castEdgeShadows(value) {
    throw new Error('Function not implemented.')
  },

  staticSunShadowHeight(value) {
    throw new Error('Function not implemented.')
  },

  useSameGraphicForGhost(value) {
    throw new Error('Function not implemented.')
  },

  useBlueprintGraphicAsGhost(value) {
    throw new Error('Function not implemented.')
  },

  randomStyle(value) {
    throw new Error('Function not implemented.')
  },

  randomStyleChance(value) {
    throw new Error('Function not implemented.')
  },

  canEditAnyStyle(value) {
    throw new Error('Function not implemented.')
  },

  defaultStuff(value) {
    throw new Error('Function not implemented.')
  },

  killedLeavingsExpandRect(value) {
    throw new Error('Function not implemented.')
  },

  minifiedDrawScale(value) {
    throw new Error('Function not implemented.')
  },

  overrideMinifiedRot(value) {
    throw new Error('Function not implemented.')
  },

  minifiedDrawOffset(value) {
    throw new Error('Function not implemented.')
  },

  deselectedSelectionBracketFactor(value) {
    throw new Error('Function not implemented.')
  },

  selectable(value) {
    throw new Error('Function not implemented.')
  },

  containedPawnsSelectable(value) {
    throw new Error('Function not implemented.')
  },

  containedItemsSelectable(value) {
    throw new Error('Function not implemented.')
  },

  neverMultiSelect(value) {
    throw new Error('Function not implemented.')
  },

  isAutoAttackableMapObject(value) {
    throw new Error('Function not implemented.')
  },

  hasTooltip(value) {
    throw new Error('Function not implemented.')
  },

  inspectorTabs(value) {
    throw new Error('Function not implemented.')
  },

  inspectorTabsResolved(value) {
    throw new Error('Function not implemented.')
  },

  seeThroughFog(value) {
    throw new Error('Function not implemented.')
  },

  drawGUIOverlay(value) {
    throw new Error('Function not implemented.')
  },

  drawGUIOverlayQuality(value) {
    throw new Error('Function not implemented.')
  },

  resourceReadoutPriority(value) {
    throw new Error('Function not implemented.')
  },

  resourceReadoutAlwaysShow(value) {
    throw new Error('Function not implemented.')
  },

  drawPlaceWorkersWhileSelected(value) {
    throw new Error('Function not implemented.')
  },

  drawPlaceWorkersWhileInstallBlueprintSelected(value) {
    throw new Error('Function not implemented.')
  },

  storedConceptLearnOpportunity(value) {
    throw new Error('Function not implemented.')
  },

  uiIconScale(value) {
    throw new Error('Function not implemented.')
  },

  hasCustomRectForSelector(value) {
    throw new Error('Function not implemented.')
  },

  hideStats(value) {
    throw new Error('Function not implemented.')
  },

  hideInspect(value) {
    throw new Error('Function not implemented.')
  },

  onlyShowInspectString(value) {
    throw new Error('Function not implemented.')
  },

  hideMainDesc(value) {
    throw new Error('Function not implemented.')
  },

  alwaysHaulable(value) {
    throw new Error('Function not implemented.')
  },

  designateHaulable(value) {
    throw new Error('Function not implemented.')
  },

  thingCategories(value) {
    throw new Error('Function not implemented.')
  },

  mineable(value) {
    throw new Error('Function not implemented.')
  },

  socialPropernessMatters(value) {
    throw new Error('Function not implemented.')
  },

  stealable(value) {
    throw new Error('Function not implemented.')
  },

  soundSpawned(value) {
    throw new Error('Function not implemented.')
  },

  soundDrop(value) {
    throw new Error('Function not implemented.')
  },

  soundPickup(value) {
    throw new Error('Function not implemented.')
  },

  soundInteract(value) {
    throw new Error('Function not implemented.')
  },

  soundImpactDefault(value) {
    throw new Error('Function not implemented.')
  },

  soundPlayInstrument(value) {
    throw new Error('Function not implemented.')
  },

  soundOpen(value) {
    throw new Error('Function not implemented.')
  },

  saveCompressible(value) {
    throw new Error('Function not implemented.')
  },

  isSaveable(value) {
    throw new Error('Function not implemented.')
  },

  holdsRoof(value) {
    throw new Error('Function not implemented.')
  },

  fillPercent(value) {
    throw new Error('Function not implemented.')
  },

  coversFloor(value) {
    throw new Error('Function not implemented.')
  },

  neverOverlapFloors(value) {
    throw new Error('Function not implemented.')
  },

  surfaceType(value) {
    throw new Error('Function not implemented.')
  },

  wipesPlants(value) {
    throw new Error('Function not implemented.')
  },

  blockPlants(value) {
    throw new Error('Function not implemented.')
  },

  blockLight(value) {
    throw new Error('Function not implemented.')
  },

  blockWind(value) {
    throw new Error('Function not implemented.')
  },

  blockWeather(value) {
    throw new Error('Function not implemented.')
  },

  tradeability(value) {
    throw new Error('Function not implemented.')
  },

  tradeTags(value) {
    throw new Error('Function not implemented.')
  },

  tradeNeverStack(value) {
    throw new Error('Function not implemented.')
  },

  tradeNeverGenerateStacked(value) {
    throw new Error('Function not implemented.')
  },

  healthAffectsPrice(value) {
    throw new Error('Function not implemented.')
  },

  colorGeneratorInTraderStock(value) {
    throw new Error('Function not implemented.')
  },

  verbs(value) {
    throw new Error('Function not implemented.')
  },

  tools(value) {
    throw new Error('Function not implemented.')
  },

  equippedAngleOffset(value) {
    throw new Error('Function not implemented.')
  },

  equippedDistanceOffset(value) {
    throw new Error('Function not implemented.')
  },

  equipmentType(value) {
    throw new Error('Function not implemented.')
  },

  techLevel(value) {
    throw new Error('Function not implemented.')
  },

  weaponClasses(value) {
    throw new Error('Function not implemented.')
  },

  weaponTags: function (
    value: (
      | `${string}_${string}`
      | 'Gun'
      | 'IndustrialGunAdvanced'
      | 'AssaultRifle'
    )[]
  ) {
    throw new Error('Function not implemented.')
  },

  techHediffsTags(value) {
    throw new Error('Function not implemented.')
  },

  violentTechHediff(value) {
    throw new Error('Function not implemented.')
  },

  destroyOnDrop(value) {
    throw new Error('Function not implemented.')
  },

  equippedStatOffsets(value) {
    throw new Error('Function not implemented.')
  },

  meleeHitSound(value) {
    throw new Error('Function not implemented.')
  },

  recoilPower(value) {
    throw new Error('Function not implemented.')
  },

  recoilRelaxation(value) {
    throw new Error('Function not implemented.')
  },

  rotateInShelves(value) {
    throw new Error('Function not implemented.')
  },

  mergeVerbGizmos(value) {
    throw new Error('Function not implemented.')
  },

  entityDefToBuild(value) {
    throw new Error('Function not implemented.')
  },

  projectileWhenLoaded(value) {
    throw new Error('Function not implemented.')
  },

  ideoBuildingNamerBase(value) {
    throw new Error('Function not implemented.')
  },

  entityCodexEntry(value) {
    throw new Error('Function not implemented.')
  },

  ingestible(value) {
    throw new Error('Function not implemented.')
  },

  filth(value) {
    throw new Error('Function not implemented.')
  },

  gas(value) {
    throw new Error('Function not implemented.')
  },

  building(value) {
    throw new Error('Function not implemented.')
  },

  race(value) {
    throw new Error('Function not implemented.')
  },

  apparel(value) {
    throw new Error('Function not implemented.')
  },

  mote(value) {
    throw new Error('Function not implemented.')
  },

  plant(value) {
    throw new Error('Function not implemented.')
  },

  projectile(value) {
    throw new Error('Function not implemented.')
  },

  stuffProps(value) {
    throw new Error('Function not implemented.')
  },

  skyfaller(value) {
    throw new Error('Function not implemented.')
  },

  pawnFlyer(value) {
    throw new Error('Function not implemented.')
  },

  ritualFocus(value) {
    throw new Error('Function not implemented.')
  },

  ingredient(value) {
    throw new Error('Function not implemented.')
  },

  canBeUsedUnderRoof(value) {
    throw new Error('Function not implemented.')
  },

  descriptionDetailedCached(value) {
    throw new Error('Function not implemented.')
  },

  interactionCellGraphic(value) {
    throw new Error('Function not implemented.')
  },

  isNaturalOrganCached(value) {
    throw new Error('Function not implemented.')
  },

  hasSunShadowsCached(value) {
    throw new Error('Function not implemented.')
  },

  cachedRelevantStyleCategories(value) {
    throw new Error('Function not implemented.')
  },

  allRecipesCached(value) {
    throw new Error('Function not implemented.')
  },

  EmptyVerbPropertiesList(value) {
    throw new Error('Function not implemented.')
  },

  concreteExamplesInt(value) {
    throw new Error('Function not implemented.')
  },

  statBases(value) {
    throw new Error('Function not implemented.')
  },

  passability(value) {
    throw new Error('Function not implemented.')
  },

  pathCost(value) {
    throw new Error('Function not implemented.')
  },

  pathCostIgnoreRepeat(value) {
    throw new Error('Function not implemented.')
  },

  fertility(value) {
    throw new Error('Function not implemented.')
  },

  costList(value) {
    throw new Error('Function not implemented.')
  },

  costStuffCount(value) {
    throw new Error('Function not implemented.')
  },

  stuffCategories(value) {
    throw new Error('Function not implemented.')
  },

  stuffCategorySummary(value) {
    throw new Error('Function not implemented.')
  },

  costListForDifficulty(value) {
    throw new Error('Function not implemented.')
  },

  placingDraggableDimensions(value) {
    throw new Error('Function not implemented.')
  },

  clearBuildingArea(value) {
    throw new Error('Function not implemented.')
  },

  defaultPlacingRot(value) {
    throw new Error('Function not implemented.')
  },

  resourcesFractionWhenDeconstructed(value) {
    throw new Error('Function not implemented.')
  },

  blocksAltitudes(value) {
    throw new Error('Function not implemented.')
  },

  dominantStyleCategory(value) {
    throw new Error('Function not implemented.')
  },

  isAltar(value) {
    throw new Error('Function not implemented.')
  },

  useStuffTerrainAffordance(value) {
    throw new Error('Function not implemented.')
  },

  terrainAffordanceNeeded(value) {
    throw new Error('Function not implemented.')
  },

  buildingPrerequisites(value) {
    throw new Error('Function not implemented.')
  },

  researchPrerequisites(value) {
    throw new Error('Function not implemented.')
  },

  minMonolithLevel(value) {
    throw new Error('Function not implemented.')
  },

  constructionSkillPrerequisite(value) {
    throw new Error('Function not implemented.')
  },

  artisticSkillPrerequisite(value) {
    throw new Error('Function not implemented.')
  },

  minTechLevelToBuild(value) {
    throw new Error('Function not implemented.')
  },

  maxTechLevelToBuild(value) {
    throw new Error('Function not implemented.')
  },

  altitudeLayer(value) {
    throw new Error('Function not implemented.')
  },

  repairEffect(value) {
    throw new Error('Function not implemented.')
  },

  constructEffect(value) {
    throw new Error('Function not implemented.')
  },

  colorPerStuff(value) {
    throw new Error('Function not implemented.')
  },

  canGenerateDefaultDesignator(value) {
    throw new Error('Function not implemented.')
  },

  ideoBuilding(value) {
    throw new Error('Function not implemented.')
  },

  specialDisplayRadius(value) {
    throw new Error('Function not implemented.')
  },

  placeWorkers(value) {
    throw new Error('Function not implemented.')
  },

  designationCategory(value) {
    throw new Error('Function not implemented.')
  },

  designatorDropdown(value) {
    throw new Error('Function not implemented.')
  },

  designationHotKey(value) {
    throw new Error('Function not implemented.')
  },

  uiOrder(value) {
    throw new Error('Function not implemented.')
  },

  uiIconPath(value) {
    throw new Error('Function not implemented.')
  },

  uiIconPathsStuff(value) {
    throw new Error('Function not implemented.')
  },

  uiIconOffset(value) {
    throw new Error('Function not implemented.')
  },

  uiIconColor(value) {
    throw new Error('Function not implemented.')
  },

  uiIconForStackCount(value) {
    throw new Error('Function not implemented.')
  },

  blueprintDef(value) {
    throw new Error('Function not implemented.')
  },

  installBlueprintDef(value) {
    throw new Error('Function not implemented.')
  },

  frameDef(value) {
    throw new Error('Function not implemented.')
  },

  placeWorkersInstantiatedInt(value) {
    throw new Error('Function not implemented.')
  },

  graphic(value) {
    throw new Error('Function not implemented.')
  },

  uiIcon(value) {
    throw new Error('Function not implemented.')
  },

  stuffUiIcons(value) {
    throw new Error('Function not implemented.')
  },

  uiIconAngle(value) {
    throw new Error('Function not implemented.')
  },

  tmpCostList(value) {
    throw new Error('Function not implemented.')
  },

  tmpHyperlinks(value) {
    throw new Error('Function not implemented.')
  },

  defName(value) {
    throw new Error('Function not implemented.')
  },

  description(value) {
    throw new Error('Function not implemented.')
  },

  descriptionHyperlinks(value) {
    throw new Error('Function not implemented.')
  },

  ignoreConfigErrors(value) {
    throw new Error('Function not implemented.')
  },

  ignoreIllegalLabelCharacterConfigError(value) {
    throw new Error('Function not implemented.')
  },

  modExtensions(value) {
    throw new Error('Function not implemented.')
  },

  shortHash(value) {
    throw new Error('Function not implemented.')
  },

  index(value) {
    throw new Error('Function not implemented.')
  },

  modContentPack(value) {
    throw new Error('Function not implemented.')
  },

  fileName(value) {
    throw new Error('Function not implemented.')
  },

  cachedLabelCap(value) {
    throw new Error('Function not implemented.')
  },

  generated(value) {
    throw new Error('Function not implemented.')
  },

  debugRandomId(value) {
    throw new Error('Function not implemented.')
  },

  DefaultDefName(value) {
    throw new Error('Function not implemented.')
  },
}
