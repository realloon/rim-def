interface Attrs {
    '@_Name': string;
    '@_ParentName': string;
}
export default abstract class Definer {
    protected abstract type: string;
    protected abstract attrs: Partial<Attrs>;
    protected defined: Record<string, unknown>;
    constructor(defName: string);
    get defName(): string;
}
export {};
