export interface Translate {
  [query: string]: Partial<{
    en: string
    hans: string
    hant: string
  }>
}