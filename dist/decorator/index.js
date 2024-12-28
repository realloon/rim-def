import { XMLBuilder } from 'fast-xml-parser';
const builder = new XMLBuilder({
    ignoreAttributes: false,
    format: false,
});
export function extension(constructor) {
    constructor.prototype.bundle = function () {
        return wrapArraysForXml({
            [this.type]: Object.assign(this.attrs, this.defined),
        });
    };
    constructor.prototype.asXml = function () {
        return builder.build(this.bundle());
    };
}
function wrapArraysForXml(obj) {
    Object.entries(obj).forEach(([key, values]) => {
        if (Array.isArray(values)) {
            const wrapped = values.map(item => isObject(values) ? wrapArraysForXml(item) : item);
            obj[key] = { li: wrapped }; // adapt to convert to xml
        }
        else if (isObject(values)) {
            wrapArraysForXml(values);
        }
    });
    return obj;
}
function isObject(val) {
    return typeof val === 'object' && val !== null;
}
