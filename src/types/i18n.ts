export interface Translate {
  [query: string]: Partial<{
    en: string
    hans: string
    hant: string
  }>
}

export type I18n = Translate[string] & { default: string }