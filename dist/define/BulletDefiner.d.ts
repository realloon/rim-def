import Definer from './Definer';
export default class BulletDef extends Definer {
    protected type: string;
    protected attrs: {
        '@_ParentName': string;
    };
    protected defined: Partial<Bullet>;
    constructor(defName: string);
    label(value: Bullet['label']): this;
    graphicData(value: Bullet['graphicData']): this;
    projectile(value: Bullet['projectile']): this;
}
