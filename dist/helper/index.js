export function output(defs, fileName = 'bundle') {
    fileName = `./output/${fileName}.xml`;
    // @ts-ignore
    const defsXml = defs.map(def => def.asXml()).join('');
    const result = `<?xml version="1.0" encoding="utf-8" ?><Defs>${defsXml}</Defs>`;
    console.info('The packaged results have been output to', fileName);
    // @ts-ignore
    Bun.write(fileName, result);
}
