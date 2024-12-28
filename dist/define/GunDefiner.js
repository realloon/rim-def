import Definer from './Definer';
export default class GunDef extends Definer {
    type = 'ThingDef';
    attrs = { '@_ParentName': 'BaseHumanMakeableGun' };
    defined = {};
    constructor(defName) {
        super(defName);
    }
    label(value) {
        this.defined.label = value;
        return this;
    }
    description(value) {
        this.defined.description = value;
        return this;
    }
    techLevel(value) {
        this.defined.techLevel = value;
        return this;
    }
    graphicData(value) {
        this.defined.graphicData = value;
        return this;
    }
    soundInteract(value) {
        this.defined.soundInteract = value;
        return this;
    }
    statBases(value) {
        this.defined.statBases = value;
        return this;
    }
    /** 设定制作清单 */
    recipeMaker(value) {
        this.defined.recipeMaker = value;
        return this;
    }
    /** 设定材料花费 */
    costList(value) {
        this.defined.costList = value;
        return this;
    }
    /** 设定武器标签 */
    weaponTags(values) {
        this.defined.weaponTags = values;
        return this;
    }
    verbs(values) {
        this.defined.verbs = values;
        return this;
    }
    tools(values) {
        this.defined.tools = values;
        return this;
    }
    equippedStatOffsets(value) {
        this.defined.equippedStatOffsets = value;
        return this;
    }
}
