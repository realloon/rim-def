import { Defined } from '#defined'
import SoundDefiner from './SoundDefiner'

export function defineSound(defName: string) {
  return new SoundDefiner(defName, new Defined('Sound'))
}

const sound = defineSound('Sound')
sound.label('sound label')

console.log(JSON.stringify(sound, null, 2))
