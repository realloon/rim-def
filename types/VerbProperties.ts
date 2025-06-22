import {
  float,
  System,
  StatDef,
  int,
  SoundDefName,
  ThingDefName,
  FleckDefName,
  Color,
  EffecterDefName,
  BodyPartGroupDefName,
  DamageDefName,
  FloatRange,
  TaleDefName,
  BodyPartTagDefName,
  RulePackDefName,
  MechWorkModeDefName,
  ProjectileDefName,
} from '.'

interface VerbCategory {}
interface TargetingParameters {}
interface Intelligence {}
interface SimpleCurve {}

type floatean = unknown

export interface VerbProperties {
  /**
   * @default VerbCategory.Misc
   */
  category: VerbCategory

  /**
   * @default typeof (Verb)
   * @todo [TranslationHandle]
   */
  verbClass: 'Verb_Shoot' | `${string}_${string}_${string}`

  /**
   * [MustTranslate]
   */
  label: string

  /**
   * @todo [TranslationHandle(Priority = 100)]
   */
  untranslatedLabel: string

  /**
   * @default true
   */
  isPrimary: boolean

  /**
   * @default true
   */
  violent: boolean

  minRange: float

  /**
   * @defualt 1.42f
   */
  range: float

  rangeStat: StatDef

  /**
   * @default 1
   */
  burstShotCount: int

  /**
   *@default 15
   */
  ticksBetweenBurstShots: int

  /**
   *@default true
   */
  showBurstShotStats: boolean

  /**
   *@default 3f
   */
  noiseRadius: float

  hasStandardCommand: boolean

  /**
   *@default true
   */
  targetable: Boolean

  nonInterruptingSelfCast: boolean

  /**
   * @default = new TargetingParameters()
   */
  targetParams: TargetingParameters

  /**
   * @default true
   */
  requireLineOfSight: boolean

  mustCastOnOpenGround: boolean

  /**
   * @default true
   */
  forceNormalTimeSpeed: boolean

  onlyManualCast: boolean

  /**
   * @default true
   */
  stopBurstWithoutLos: boolean
  // public SurpriseAttackProps surpriseAttack;

  /**
   * @default 1f
   */
  commonality: floatean

  minIntelligence: Intelligence

  consumeFuelPerShot: float

  consumeFuelPerBurst: float

  stunTargetOnCastStart: boolean

  invalidTargetPawn: string

  /**
   * @default  1f
   */
  commonalityVsEdificeFactor: float

  flammabilityAttachFireChanceCurve: SimpleCurve

  /**
   * @default  true
   */
  useableInPocketMaps: boolean

  /**
   * @todo [MustTranslate]
   */
  mouseTargetingText: string

  warmupTime: float

  defaultCooldownTime: float

  commandIcon: string

  soundCast: SoundDefName

  soundCastTail: SoundDefName

  soundAiming: SoundDefName

  muzzleFlashScale: float

  impactMote: ThingDefName

  impactFleck: FleckDefName

  /**
   * @default true
   */
  drawAimPie: boolean

  warmupEffecter: EffecterDefName

  drawHighlightWithLineOfSight: boolean

  aimingLineMote: ThingDefName

  aimingLineMoteFixedLength: float | undefined

  aimingChargeMote: ThingDefName

  aimingChargeMoteOffset: float

  aimingTargetMote: ThingDefName

  aimingTargetEffecter: EffecterDefName

  /**
   * @default Color.white
   */
  explosionRadiusRingColor: Color

  linkedBodyPartsGroup: BodyPartGroupDefName

  ensureLinkedBodyPartsGroupAlwaysUsable: boolean

  meleeDamageDef: DamageDefName

  /**
   * @default 1
   */
  meleeDamageBaseAmount: int

  /**
   *  @default-1f
   */
  meleeArmorPenetrationBase: float

  /**
   * @default true
   */
  ai_IsWeapon: boolean

  ai_IsBuildingDestroyer: boolean

  ai_AvoidFriendlyFireRadius: float

  ai_RangedAlawaysShootGroundBelowTarget: boolean

  ai_IsDoorDestroyer: boolean

  ai_ProjectileLaunchingIgnoresMeleeThreats: boolean

  ai_TargetHasRangedAttackScoreOffset: float

  defaultProjectile: ProjectileDefName

  forcedMissRadius: float

  /**
   * @default -1f
   */
  forcedMissRadiusClassicMortars: float

  forcedMissEvenDispersal: boolean

  isMortar: boolean

  /**
   * @default 1f
   */
  accuracyTouch: float

  /**
   * @default 1f
   */
  accuracyShort: float

  /**
   * @default 1f
   */
  accuracyMedium: float

  /**
   * @default 1f
   */
  accuracyLong: float

  /**
   * @default  true
   */
  canGoWild: boolean

  beamDamageDef: DamageDefName

  /**
   * @default  1f
   */
  beamWidth: float

  beamMaxDeviation: float

  beamGroundFleckDef: FleckDefName

  beamEndEffecterDef: EffecterDefName

  beamMoteDef: ThingDefName

  beamFleckChancePerTick: float

  beamCurvature: float

  beamChanceToStartFire: float

  beamChanceToAttachFire: float

  beamStartOffset: float

  beamFullWidthRange: float

  beamLineFleckDef: FleckDefName

  beamLineFleckChanceCurve: SimpleCurve

  /**
   *  FloatRange.ZeroToOne
   */
  beamFireSizeRange: FloatRange

  soundCastBeam: SoundDefName

  beamTargetsGround: boolean

  beamSetsGroundOnFire: boolean

  beamTotalDamage: float

  beamHitsNeighborCells: boolean

  beamCantHitWithinMinRange: boolean

  beamHitsNeighborCellsRequiresLOS: boolean

  ai_BeamIsIncendiary: boolean

  sprayWidth: float

  sprayArching: float

  sprayNumExtraCells: int

  /**
   * @default 1
   */
  sprayThicknessCells: int

  sprayEffecterDef: EffecterDefName

  highlightColor: Color | undefined

  secondaryHighlightColor: Color | undefined

  spawnDef: ThingDefName

  colonyWideTaleDef: TaleDefName

  affectedCellCount: int

  bodypartTagTarget: BodyPartTagDefName

  rangedFireRulepack: RulePackDefName

  soundLanding: SoundDefName

  flightEffecterDef: EffecterDefName

  /**
   * @default true
   */
  flyWithCarriedThing: boolean

  workModeDef: MechWorkModeDefName
}
