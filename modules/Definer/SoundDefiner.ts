import { SoundDefined } from '#defined'
import Definer from './Definer'

export default class SoundDefiner extends Definer {
  constructor(defName: string, defined: SoundDefined) {
    super(defName, defined)
  }
}
