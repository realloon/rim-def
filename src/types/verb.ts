export interface VerbShoot {
  verbClass: 'Verb_Shoot'
  hasStandardCommand: boolean
  defaultProjectile: string
  warmupTime: number
  minRange: number
  range: number
  ticksBetweenBurstShots: number
  burstShotCount: number
  soundCast: string
  soundCastTail: 'GunTail_Light' | 'GunTail_Medium'
  muzzleFlashScale: number
}

