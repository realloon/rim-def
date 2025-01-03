import type { Translate } from '../types/i18n'

function useI18n<T extends Translate, K extends keyof T>(
  translate: T,
  lang: keyof T[K] = 'en'
) {
  return (query: K) =>
    Object.assign(translate[query], {
      default: translate[query][lang] ?? 'TEXT_MiSSING',
    })
}

export default useI18n
