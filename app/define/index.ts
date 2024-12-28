import GunDef from './GunDefiner'
import BulletDef from './BulletDefiner'
import SoundDef from './SoundDefiner'

export function defineGun(defName: string) {
  return new GunDef(defName)
}

export function defineBullet(defName: string) {
  return new BulletDef(defName)
}

export function defineSound(defName: string) {
  return new SoundDef(defName)
}
