import type { Bullet } from '../types/def'
import Definer from './Definer'

export default class BulletDef extends Definer {
  protected type = 'ThingDef'
  protected attrs = { '@_ParentName': 'BaseBullet' }
  protected declare defined: Bullet

  constructor(defName: string) {
    super(defName)
  }

  label(value: Bullet['label']) {
    this.defined.label = value
    return this
  }

  graphicData(value: Bullet['graphicData']) {
    this.defined.graphicData = value
    return this
  }

  projectile(value: Bullet['projectile']) {
    this.defined.projectile = value
    return this
  }
}
