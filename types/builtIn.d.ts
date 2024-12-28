type DefName = {
  defName: string
}

type Description = {
  description: string
}

type Category = {
  category: 'Projectile'
}

type TickerType = {
  tickerType: 'Normal'
}

type AltitudeLayer = {
  altitudeLayer: 'Projectile'
}

type ThingClass = {
  thingClass: 'Bullet'
}

type Label = {
  label: string
}

type UseHitPoints = {
  useHitPoints: boolean
}

type NeverMultiSelect = {
  neverMultiSelect: boolean
}

type GraphicData = {
  graphicData: Partial<{
    texPath: string
    graphicClass: 'Graphic_Single'
    drawSize: number
  }>
}

type Projectile = {
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

type TechLevel = {
  techLevel: 'Spacer'
}

type SoundInteract = {
  soundInteract: 'Interact_SMG' | 'Interact_Rifle'
}

type StatBases = {
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

type RecipeMaker = {
  recipeMaker: Partial<{
    /** 科研项目 */
    researchPrerequisite: 'ChargedShot' | 'GasOperation'
    /** 技能需求 */
    skillRequirements: Partial<{
      /** 手工 */
      Crafting: number
    }>
    /** 工作台 */
    recipeUsers: Partial<Array<'FabricationBench' | 'TableMachining'>> // '@_Inherit': 'False'
  }>
}

type CostList = {
  costList: Partial<{
    /** 钢铁 */
    Steel: number
    /** 玻璃钢 */
    Plasteel: number
    /** 零部件 */
    ComponentIndustrial: number
    /** 高级零部件 */
    ComponentSpacer: number
  }>
}

type WeaponTags = {
  weaponTags: Array<
    'Gun' | 'SpacerGun' | 'GunHeavy' | 'IndustrialGunAdvanced'
  >
}

type Verbs = {
  verbs: Array<
    Partial<{
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
    }>
  >
}

type Tools = {
  tools: Array<
    Partial<{
      label: 'barrel' | 'stock'
      capacities: Array<'Blunt' | 'Poke'>
      power: number
      cooldownTime: number
    }>
  >
}

type EquippedStatOffsets = {
  equippedStatOffsets: Partial<{
    /** 移动速度 */
    MoveSpeed: number
  }>
}

type Context = {
  context: 'MapOnly'
}

type EventNames = {
  eventNames: null
}

type MaxVoices = {
  maxVoices: number
}

type MaxSimultaneous = {
  maxSimultaneous: number
}

type SubSounds = {
  subSounds: Array<
    Partial<{
      grains: [
        {
          '@_Class': 'AudioGrain_Clip'
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
