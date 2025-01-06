import Definer from '../define/Definer'

export default function outputTrans() {
  Definer.translated.forEach(({ defName, field, i18n }) => {
    const r = {
      [`${defName}.${field}`]: i18n.hans,
    }
  })
}
