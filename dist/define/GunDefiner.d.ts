import Definer from './Definer';
export default class GunDef extends Definer {
    protected type: string;
    protected attrs: {
        '@_ParentName': string;
    };
    protected defined: Partial<Gun>;
    constructor(defName: string);
    label(value: Gun['label']): this;
    description(value: Gun['description']): this;
    techLevel(value: Gun['techLevel']): this;
    graphicData(value: Gun['graphicData']): this;
    soundInteract(value: Gun['soundInteract']): this;
    statBases(value: Gun['statBases']): this;
    /** 设定制作清单 */
    recipeMaker(value: Gun['recipeMaker']): this;
    /** 设定材料花费 */
    costList(value: Gun['costList']): this;
    /** 设定武器标签 */
    weaponTags(values: Gun['weaponTags']): this;
    verbs(values: Gun['verbs']): this;
    tools(values: Gun['tools']): this;
    equippedStatOffsets(value: Gun['equippedStatOffsets']): this;
}
