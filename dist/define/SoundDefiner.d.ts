import type { Sound } from '../types';
import Definer from './Definer';
export default class SoundDef extends Definer {
    protected type: string;
    protected attrs: {};
    protected defined: Partial<Sound>;
    constructor(defName: string);
    context(value: Sound['context']): this;
    eventNames(value: Sound['eventNames']): this;
    maxVoices(value: Sound['maxVoices']): this;
    maxSimultaneous(value: Sound['maxSimultaneous']): this;
    subSounds(values: Sound['subSounds']): this;
}
