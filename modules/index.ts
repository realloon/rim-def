import type { ThingDef } from '../types'
import { buildXML } from '../helpers/buildXML'

const weapon: Partial<ThingDef> = {
  _Name: 'BaseWeapon',
  _Abstract: 'True',
  thingClass: 'ThingWithComps',
  category: 'Item',
  drawerType: 'MapMeshOnly',
  drawGUIOverlay: true,
  altitudeLayer: 'Item',
  alwaysHaulable: true,
  tickerType: 'Never',
  equipmentType: 'Primary',
  useHitPoints: true,
  pathCost: 14,
  selectable: true,
  statBases: {
    MaxHitPoints: 100,
    Flammability: 1.0,
    DeteriorationRate: 2,
    Beauty: -3,
    SellPriceFactor: 0.2,
  },
  comps: [
    { _Class: 'CompProperties_Forbiddable' },
    { compClass: 'CompEquippable' },
    { _Class: 'CompProperties_Styleable' },
  ],
  graphicData: {
    onGroundRandomRotateAngle: 35,
  },
  allowedArchonexusCount: 1,
}

const gun: Partial<ThingDef> = {
  _Name: 'BaseGun',
  _ParentName: weapon._Name,
  _Abstract: 'True',
  techLevel: 'Industrial',
  smeltable: true,
  relicChance: 1,
  thingCategories: ['WeaponsRanged'],
  weaponClasses: ['Ranged'],
  inspectorTabs: ['ITab_Art'],
  statBases: {
    Flammability: 0.5,
  },
  comps: [
    {
      _Class: 'CompProperties_Art',
      nameMaker: 'NamerArtWeaponGun',
      descriptionMaker: 'ArtDescription_WeaponGun',
      minQualityForArtistic: 'Excellent',
    },
  ],
}

const qualitiable: Partial<ThingDef> = {
  _Name: 'BaseGunWithQuality',
  _ParentName: gun._Name,
  _Abstract: 'True',
  comps: [{ compClass: 'CompQuality' }],
}

const makeable: Partial<ThingDef> = {
  _Name: 'BaseMakeableGun',
  _ParentName: 'BaseGunWithQuality',
  _Abstract: 'True',
  recipeMaker: {
    workSpeedStat: 'GeneralLaborSpeed',
    workSkill: 'Crafting',
    effectWorking: 'Smith',
    soundWorking: 'Recipe_Smith',
    recipeUsers: ['TableMachining'],
    unfinishedThingDef: 'UnfinishedGun',
    researchPrerequisite: 'Gunsmithing',
  },
}

const humanMakeableGun: Partial<ThingDef> = {
  _Name: 'BaseHumanMakeableGun',
  _ParentName: 'BaseMakeableGun',
  _Abstract: 'True',
  weaponTags: ['Gun'],
  tradeTags: ['WeaponRanged'],
  comps: [
    {
      _Class: 'CompProperties_Biocodable',
    },
  ],
}

import { compose } from '../helpers/compose'
const humanGun = [weapon, gun, qualitiable, makeable, humanMakeableGun].reduce(
  (a, b) => compose(a, b)
)

interface Person {
  name: string
  age: number
}

interface DefinePerson {
  name: (value: string) => DefinePerson
  age: (value: number) => DefinePerson
}





// const definer = new Definer('Mona')

// const rifle = definer.define('Rifle')
// rifle.weaponTags(['Gun'])

// const assaultRifle = definer.define('AssaultRifle')
// assaultRifle.useCompose([rifle])
// assaultRifle.label('assault rifle')

// Definer.preview(assaultRifle)

//
const _assaultRifle: Partial<ThingDef> = {
  _ParentName: humanMakeableGun._Name,
  defName: 'Gun_AssaultRifle',
  label: 'assault rifle',
  description:
    'A general-purpose gas-operated assault rifle for field or urban combat. It has good range, decent power, and good accuracy.',
  graphicData: {
    texPath: 'Things/Item/Equipment/WeaponRanged/AssaultRifle',
    graphicClass: 'Graphic_Single',
  },
  soundInteract: 'Interact_Rifle',
  recipeMaker: {
    researchPrerequisite: 'PrecisionRifling',
    skillRequirements: {
      Crafting: 6,
    },
    displayPriority: 420,
  },
  thingSetMakerTags: ['RewardStandardQualitySuper'],
  statBases: {
    WorkToMake: 40000,
    Mass: 3.5,
    AccuracyTouch: 0.6,
    AccuracyShort: 0.7,
    AccuracyMedium: 0.65,
    AccuracyLong: 0.55,
    RangedWeapon_Cooldown: 1.7,
  },
  costList: {
    Steel: 60,
    ComponentIndustrial: 7,
  },
  verbs: [
    {
      verbClass: 'Verb_Shoot',
      hasStandardCommand: true,
      defaultProjectile: 'Bullet_AssaultRifle',
      warmupTime: 1.0,
      range: 30.9,
      burstShotCount: 3,
      ticksBetweenBurstShots: 10,
      soundCast: 'Shot_AssaultRifle',
      soundCastTail: 'GunTail_Medium',
      muzzleFlashScale: 9,
    },
  ],
  weaponTags: ['AssaultRifle', 'IndustrialGunAdvanced'],
  tools: [
    {
      label: 'stock',
      capacities: ['Blunt'],
      power: 9,
      cooldownTime: 2,
    },
    {
      label: 'barrel',
      capacities: ['Blunt', 'Poke'],
      power: 9,
      cooldownTime: 2,
    },
  ],
}

// const xml = buildXML([baseGun], 'ThingDef')
// console.log(xml)
