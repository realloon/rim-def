export interface ApparelReloadable {
  '@_Class': 'CompProperties_ApparelReloadable'
  maxCharges: number
  ammoDef: 'Chemfuel'
  ammoCountPerCharge: number
  baseReloadTicks: number
  soundReload: 'Standard_Reload'
  hotKey: 'Misc4'
  chargeNoun: 'incendiary'
  displayGizmoWhileUndrafted: boolean
}

export interface Burnable {
  '@_Class': 'CompProperties_AbilityBurner'
  numStreams: number
  range: number
  coneSizeDegrees: number
  moteDef: 'Mote_IncineratorBurst'
  barrelOffsetDistance: number
  sizeReductionDistanceThreshold: number
  lifespanNoise: number
  rangeNoise: number
  effecterDef: 'BurnerUsed'
}

export interface Firespewable {
  '@_Class': 'CompProperties_AbilityFireSpew'
  range: number
  lineWidthEnd: number
  filthDef: 'Filth_Ash'
  damAmount: number
  canHitFilledCells: boolean
}
