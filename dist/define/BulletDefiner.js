import Definer from './Definer';
export default class BulletDef extends Definer {
    type = 'ThingDef';
    attrs = { '@_ParentName': 'BaseBullet' };
    defined = {};
    constructor(defName) {
        super(defName);
    }
    label(value) {
        this.defined.label = value;
        return this;
    }
    graphicData(value) {
        this.defined.graphicData = value;
        return this;
    }
    projectile(value) {
        this.defined.projectile = value;
        return this;
    }
}
