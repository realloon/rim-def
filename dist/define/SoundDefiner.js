import Definer from './Definer';
export default class SoundDef extends Definer {
    type = 'SoundDef';
    attrs = {};
    defined = {};
    constructor(defName) {
        super(defName);
    }
    context(value) {
        this.defined.context = value;
        return this;
    }
    eventNames(value) {
        this.defined.eventNames = value;
        return this;
    }
    maxVoices(value) {
        this.defined.maxSimultaneous = value;
        return this;
    }
    maxSimultaneous(value) {
        this.defined.maxSimultaneous = value;
        return this;
    }
    subSounds(values) {
        this.defined.subSounds = values;
        return this;
    }
}
