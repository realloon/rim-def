import GunDefiner from './GunDefiner'
import BulletDefiner from './BulletDefiner'
import SoundDefiner from './SoundDefiner'
import AbilityDefiner from './AbilityDefiner'

export function defineGun(defName: string) {
  return new GunDefiner(defName)
}

export function defineBullet(defName: string) {
  return new BulletDefiner(defName)
}

export function defineSound(defName: string) {
  return new SoundDefiner(defName)
}

export function defineAbility(defName: string) {
  return new AbilityDefiner(defName)
}
