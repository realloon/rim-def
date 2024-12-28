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
  EquippedStatOffsets

export type Sound = DefName &
  Context &
  EventNames &
  MaxVoices & 
  MaxSimultaneous &
  SubSounds
