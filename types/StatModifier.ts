export interface StatModifier {
  MaxHitPoints: StatDef

  MarketValue: StatDef

  MarketValueIgnoreHp: StatDef

  RoyalFavorValue: StatDef

  SellPriceFactor: StatDef

  Beauty: StatDef

  BeautyOutdoors: StatDef

  Cleanliness: StatDef

  Flammability: StatDef

  DeteriorationRate: StatDef

  WorkToMake: StatDef

  WorkToBuild: StatDef

  Mass: StatDef

  ConstructionSpeedFactor: StatDef

  Nutrition: StatDef

  FoodPoisonChanceFixedHuman: StatDef

  MoveSpeed: StatDef

  CrawlSpeed: StatDef

  GlobalLearningFactor: StatDef

  BedHungerRateFactor: StatDef

  RestRateMultiplier: StatDef

  PsychicSensitivity: StatDef

  ToxicResistance: StatDef

  MentalBreakThreshold: StatDef

  EatingSpeed: StatDef

  ComfyTemperatureMin: StatDef

  ComfyTemperatureMax: StatDef

  Comfort: StatDef

  MeatAmount: StatDef

  LeatherAmount: StatDef

  MinimumHandlingSkill: StatDef

  MeleeDPS: StatDef

  PainShockThreshold: StatDef

  ForagedNutritionPerDay: StatDef

  FilthRate: StatDef

  MaxNutrition: StatDef

  LifespanFactor: StatDef

  /**
   * [MayRequireRoyalty]
   */
  PsychicEntropyMax: StatDef

  /**
   * [MayRequireRoyalty]
   */
  PsychicEntropyRecoveryRate: StatDef

  /**
   * [MayRequireRoyalty]
   */
  PsychicEntropyGain: StatDef

  /**
   * [MayRequireRoyalty]
   */
  MeditationFocusGain: StatDef

  /**
   * [MayRequireIdeology]
   */
  CertaintyLossFactor: StatDef

  /**
   * [MayRequireIdeology]
   */
  SocialIdeoSpreadFrequencyFactor: StatDef

  /**
   * [MayRequireIdeology]
   */
  SuppressionPower: StatDef

  /**
   * [MayRequireIdeology]
   */
  SlaveSuppressionFallRate: StatDef

  AnimalsLearningFactor: StatDef

  BondAnimalChanceFactor: StatDef

  CaravanRidingSpeedFactor: StatDef

  RestFallRateFactor: StatDef

  JoyFallRateFactor: StatDef

  /**
   * [MayRequireIdeology]
   */
  BiosculpterOccupantSpeed: StatDef

  /**
   * [MayRequireBiotech]
   */
  MechEnergyUsageFactor: StatDef

  MeleeDamageFactor: StatDef

  MeleeCooldownFactor: StatDef

  /**
   * [MayRequireBiotech]
   */
  ToxicEnvironmentResistance: StatDef

  /**
   * [MayRequireBiotech]
   */
  HemogenGainFactor: StatDef

  /**
   * [MayRequireBiotech]
   */
  RawNutritionFactor: StatDef

  /**
   * [MayRequireBiotech]
   */
  CancerRate: StatDef

  /**
   * [MayRequireBiotech]
   */
  WastepacksPerRecharge: StatDef

  /**
   * [MayRequireBiotech]
   */
  MechEnergyLossPerHP: StatDef

  /**
   * [MayRequireBiotech]
   */
  LearningRateFactor: StatDef

  /**
   * [MayRequireBiotech]
   */
  GrowthVatOccupantSpeed: StatDef

  /**
   * [MayRequireAnomaly]
   */
  MinimumContainmentStrength: StatDef

  /**
   * [MayRequireAnomaly]
   */
  PsychicRitualQualityOffset: StatDef

  WorkSpeedGlobal: StatDef

  MiningSpeed: StatDef

  DeepDrillingSpeed: StatDef

  MiningYield: StatDef

  ResearchSpeed: StatDef

  ConstructionSpeed: StatDef

  HuntingStealth: StatDef

  PlantWorkSpeed: StatDef

  SmoothingSpeed: StatDef

  FoodPoisonChance: StatDef

  CarryingCapacity: StatDef

  PlantHarvestYield: StatDef

  DrugHarvestYield: StatDef

  FixBrokenDownBuildingSuccessChance: StatDef

  ConstructSuccessChance: StatDef

  GeneralLaborSpeed: StatDef

  CleaningSpeed: StatDef

  ReadingSpeed: StatDef

  /**
   * [MayRequireIdeology]
   */
  HackingSpeed: StatDef

  /**
   * [MayRequireIdeology]
   */
  PruningSpeed: StatDef

  /**
   * [MayRequireBiotech]
   */
  MechBandwidth: StatDef

  /**
   * [MayRequireBiotech]
   */
  MechRemoteRepairDistance: StatDef

  /**
   * [MayRequireBiotech]
   */
  MechRemoteShieldEnergy: StatDef

  /**
   * [MayRequireBiotech]
   */
  MechControlGroups: StatDef

  /**
   * [MayRequireBiotech]
   */
  BandwidthCost: StatDef

  /**
   * [MayRequireBiotech]
   */
  MechRepairSpeed: StatDef

  /**
   * [MayRequireBiotech]
   */
  ControlTakingTime: StatDef

  /**
   * [MayRequireAnomaly]
   */
  EntityStudyRate: StatDef

  /**
   * [MayRequireAnomaly]
   */
  ActivitySuppressionRate: StatDef

  /**
   * [MayRequireAnomaly]
   */
  StudyEfficiency: StatDef

  MedicalTendSpeed: StatDef

  MedicalTendQuality: StatDef

  MedicalSurgerySuccessChance: StatDef

  NegotiationAbility: StatDef

  ArrestSuccessChance: StatDef

  TradePriceImprovement: StatDef

  DrugSellPriceImprovement: StatDef

  SocialImpact: StatDef

  PawnBeauty: StatDef

  /**
   * [MayRequireIdeology]
   */
  AnimalProductsSellImprovement: StatDef
  /**
   * [MayRequireIdeology]
   */
  ConversionPower: StatDef
  /**
   * [MayRequireBiotech]
   */
  BabyPlayGainFactor: StatDef
  /**
   * [MayRequireBiotech]
   */
  Fertility: StatDef
  AnimalGatherSpeed: StatDef
  AnimalGatherYield: StatDef
  TameAnimalChance: StatDef
  TrainAnimalChance: StatDef
  ShootingAccuracyPawn: StatDef
  ShootingAccuracyTurret: StatDef
  MortarMissRadiusFactor: StatDef
  AimingDelayFactor: StatDef
  /**
   * [MayRequireIdeology]
   */
  ShootingAccuracyOutdoorsDarkOffset: StatDef
  /**
   * [MayRequireIdeology]
   */
  ShootingAccuracyOutdoorsLitOffset: StatDef
  /**
   * [MayRequireIdeology]
   */
  ShootingAccuracyIndoorsDarkOffset: StatDef
  /**
   * [MayRequireIdeology]
   */
  ShootingAccuracyIndoorsLitOffset: StatDef
  /**
   * [MayRequireIdeology]
   */
  MeleeHitChanceOutdoorsDarkOffset: StatDef
  /**
   * [MayRequireIdeology]
   */
  MeleeHitChanceOutdoorsLitOffset: StatDef
  /**
   * [MayRequireIdeology]
   */
  MeleeHitChanceIndoorsDarkOffset: StatDef
  /**
   * [MayRequireIdeology]
   */
  MeleeHitChanceIndoorsLitOffset: StatDef
  /**
   * [MayRequireIdeology]
   */
  MeleeDodgeChanceOutdoorsDarkOffset: StatDef
  /**
   * [MayRequireIdeology]
   */
  MeleeDodgeChanceOutdoorsLitOffset: StatDef
  /**
   * [MayRequireIdeology]
   */
  MeleeDodgeChanceIndoorsDarkOffset: StatDef
  /**
   * [MayRequireIdeology]
   */
  MeleeDodgeChanceIndoorsLitOffset: StatDef
  /**
   * [MayRequireBiotech]
   */
  StaggerDurationFactor: StatDef
  RangedCooldownFactor: StatDef
  MeleeHitChance: StatDef
  MeleeDodgeChance: StatDef
  /**
   * [MayRequireBiotech]
   */
  MeleeDoorDamageFactor: StatDef
  PawnTrapSpringChance: StatDef
  IncomingDamageFactor: StatDef
  MeleeWeapon_AverageDPS: StatDef
  MeleeWeapon_DamageMultiplier: StatDef
  MeleeWeapon_CooldownMultiplier: StatDef
  SharpDamageMultiplier: StatDef
  BluntDamageMultiplier: StatDef
  StuffPower_Armor_Sharp: StatDef
  StuffPower_Armor_Blunt: StatDef
  StuffPower_Armor_Heat: StatDef
  StuffPower_Insulation_Cold: StatDef
  StuffPower_Insulation_Heat: StatDef
  RangedWeapon_Cooldown: StatDef
  RangedWeapon_DamageMultiplier: StatDef
  AccuracyTouch: StatDef
  AccuracyShort: StatDef
  AccuracyMedium: StatDef
  AccuracyLong: StatDef
  ShootingAccuracyFactor_Touch: StatDef
  ShootingAccuracyFactor_Short: StatDef
  ShootingAccuracyFactor_Medium: StatDef
  ShootingAccuracyFactor_Long: StatDef
  StuffEffectMultiplierArmor: StatDef
  StuffEffectMultiplierInsulation_Cold: StatDef
  StuffEffectMultiplierInsulation_Heat: StatDef
  ArmorRating_Sharp: StatDef
  ArmorRating_Blunt: StatDef
  ArmorRating_Heat: StatDef
  Insulation_Cold: StatDef
  Insulation_Heat: StatDef
  EnergyShieldRechargeRate: StatDef
  EnergyShieldEnergyMax: StatDef
  PackRadius: StatDef
  // [MayRequireRoyalty]
  JumpRange: StatDef
  EquipDelay: StatDef
  MedicalPotency: StatDef
  MedicalQualityMax: StatDef
  ImmunityGainSpeed: StatDef
  ImmunityGainSpeedFactor: StatDef
  InjuryHealingFactor: StatDef
  DoorOpenSpeed: StatDef
  BedRestEffectiveness: StatDef
  TrapMeleeDamage: StatDef
  TrapSpringChance: StatDef
  ResearchSpeedFactor: StatDef
  MedicalTendQualityOffset: StatDef
  WorkTableWorkSpeedFactor: StatDef
  WorkTableEfficiencyFactor: StatDef
  JoyGainFactor: StatDef
  SurgerySuccessChanceFactor: StatDef
  /**
   * [MayRequireIdeology]
   */
  StyleDominance: StatDef
  /**
   * [MayRequireIdeology]
   */
  BiosculpterPodSpeedFactor: StatDef
  // [MayRequireRoyalty]
  MeditationPlantGrowthOffset: StatDef
  /**
   * [MayRequireBiotech]
   */
  GeneticComplexityIncrease: StatDef
  /**
   * [MayRequireBiotech]
   */
  AssemblySpeedFactor: StatDef
  /**
   * [MayRequireAnomaly]
   */
  PsychicRitualQuality: StatDef
  /**
   * [MayRequireAnomaly]
   */
  ContainmentStrength: StatDef
  Ability_CastingTime: StatDef
  Ability_EntropyGain: StatDef
  Ability_PsyfocusCost: StatDef
  Ability_Duration: StatDef
  Ability_Range: StatDef
  Ability_EffectRadius: StatDef
  Ability_RequiredPsylink: StatDef
  Ability_GoodwillImpact: StatDef
  Ability_DetectChancePerEntropy: StatDef
  MeditationFocusStrength: StatDef
  /**
   * [MayRequireIdeology]
   */
  TerrorSource: StatDef
  /**
   * [MayRequireIdeology]
   */
  Terror: StatDef
  FilthMultiplier: StatDef
  CleaningTimeFactor: StatDef
}

export type StatDef = unknown // TODO:
