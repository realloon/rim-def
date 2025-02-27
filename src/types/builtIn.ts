import { VerbShoot } from './verb'

type Material =
  | 'Steel'
  | 'Plasteel'
  | 'ComponentIndustrial'
  | 'ComponentSpacer'

// === //

export type DefName = {
  defName: string
}

export type Description = {
  description: string
}

export type Category = {
  category: 'Projectile'
}

export type TickerType = {
  tickerType: 'Normal'
}

export type AltitudeLayer = {
  altitudeLayer: 'Projectile'
}

export type ThingClass = {
  thingClass: 'Bullet' | 'Projectile_SpawnsThing'
}

export type Label = {
  label: string
}

export type UseHitPoints = {
  useHitPoints: boolean
}

export type NeverMultiSelect = {
  neverMultiSelect: boolean
}

export type GraphicData = {
  graphicData: Partial<{
    texPath: string
    graphicClass: 'Graphic_Single'
    shaderType: 'TransparentPostLight'
    drawSize: number
  }>
}

export type UiIconScale = {
  uiIconScale: number
}

export type Projectile = {
  projectile: Partial<{
    damageDef: 'Bullet'
    /** 基础单发伤害 */
    damageAmountBase: number
    /** 基础护甲穿透 */
    armorPenetrationBase: number
    /** 抑制力 */
    stoppingPower: number
    /** 弹丸速度 */
    speed: number
  }>
}

export type TechLevel = {
  techLevel:
    | 'Neolithic'
    | 'Medieval'
    | 'Industrial'
    | 'Spacer'
    | 'Ultra'
    | 'Archotech'
}

export type SoundInteract = {
  soundInteract: 'Interact_SMG' | 'Interact_Rifle'
}

export type StatBases = {
  statBases: Partial<{
    /** 物理质量 */
    Mass: number
    /** 工作量 */
    WorkToMake: number
    /** 贴近距离精度 */
    AccuracyTouch: number
    /** 近距离精度 */
    AccuracyShort: number
    /** 中距离精度 */
    AccuracyMedium: number
    /** 远距离精度 */
    AccuracyLong: number
    RangedWeapon_Cooldown: number
  }>
}

export type RecipeMaker = {
  recipeMaker: Partial<{
    /** 科研项目 */
    researchPrerequisite: 'ChargedShot' | 'GasOperation'
    /** 技能需求 */
    skillRequirements: Partial<{
      /** 手工 */
      Crafting: number
    }>
    /**
     * 工作台
     * @default ['TableMachining']
     */
    recipeUsers: Partial<Array<'FabricationBench' | 'TableMachining'>> // '@_Inherit': 'False'
    /** 列表优先级 */
    displayPriority: number
  }>
}

export type CostList = {
  costList: Partial<Record<Material, number>>
}

export type ThingSetMakerTags = {
  thingSetMakerTags: Array<
    | 'RewardStandardMidFreq'
    | 'RewardStandardCore'
    | 'RewardStandardLowFreq'
    | 'RewardStandardQualitySuper'
    | 'RewardStandardHighFreq'
  >
}

export type WeaponTags = {
  weaponTags: Array<
    | 'Gun'
    | 'IndustrialGunAdvanced'
    | 'SpacerGun'
    | 'GunHeavy'
    | 'AssaultRifle'
  >
}

export type Tools = {
  tools: Array<
    Partial<{
      label: 'barrel' | 'stock'
      capacities: Array<'Blunt' | 'Poke'>
      power: number
      cooldownTime: number
    }>
  >
}

export type EquippedStatOffsets = {
  equippedStatOffsets: Partial<{
    /** 移动速度 */
    MoveSpeed: number
    /** 射击精度 */
    ShootingAccuracyPawn: number
  }>
}

export type Context = {
  context: 'MapOnly'
}

export type EventNames = {
  eventNames: null
}

export type MaxVoices = {
  maxVoices: number
}

export type MaxSimultaneous = {
  maxSimultaneous: number
}

export type SubSounds = {
  subSounds: Array<
    Partial<{
      grains: [
        {
          '@_Class': 'AudioGrain_Clip' | 'AudioGrain_Folder'
          clipFolderPath: string
        }
      ]
      volumeRange: {
        min: number
        max: number
      }
      pitchRange: {
        min: number
        max: number
      }
      sustainLoop: boolean
    }>
  >
}

export type IconPath = {
  iconPath: string
}

export type WorkerClass = {
  workerClass: string
}
