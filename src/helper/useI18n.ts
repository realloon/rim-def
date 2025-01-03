import type { Translate } from '../types/i18n'

function useI18n<T extends Translate, K extends keyof T>(translate: T) {
  return (query: K) => translate[query]
}

export default useI18n
