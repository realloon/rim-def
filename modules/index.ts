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

/**
 * 有必要沿用 Name, ParentName, Abstract 这套继承系统吗？
 * rim-def 使用组合模式！
 * [compose]
 */

import { compose } from '../helpers/compose'
const result = [weapon, gun, qualitiable].reduce((a, b) => compose(a, b))

const xml = buildXML([result], 'ThingDef')
console.log(xml)
