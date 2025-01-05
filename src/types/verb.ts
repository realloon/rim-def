export interface VerbShoot {
  verbClass: 'Verb_Shoot'
  defaultProjectile: string
  hasStandardCommand: boolean
  warmupTime: number
  range: number
  minRange?: number
  ticksBetweenBurstShots: number
  burstShotCount: number
  soundCast: string
  soundCastTail: 'GunTail_Light' | 'GunTail_Medium'
  muzzleFlashScale: number
}

export interface VerbAbilityShoot {
  verbClass: 'Verb_AbilityShoot'
  defaultProjectile: string,
  range: number
  soundCast: 'FireSpew_Resolve'
  muzzleFlashScale: number
  warmupTime: number
  accuracyTouch: number,
  accuracyShort: number,
  accuracyMedium: number,
  accuracyLong: number,
  ai_IsWeapon: boolean,
  targetParams: {
    canTargetPawns: boolean
    canTargetBuildings: boolean
    canTargetLocations: boolean
  }
  rangedFireRulepack: 'Combat_RangedFire_Thrown'
}

// requireLineOfSight: boolean
// flammabilityAttachFireChanceCurve: {
//   points: Array<string>
// }
