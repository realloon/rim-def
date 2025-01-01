export interface Operation {
  '@_Class':
    | 'PatchOperationAdd'
    | 'PatchOperationRemove'
    | 'PatchOperationReplace'
  xpath: string
  value?:
    | string
    | number
    | boolean
    | Record<string, unknown>
    | Array<string>
    | Array<Record<string, unknown>>
}

export type OperationOption = Omit<Required<Operation>, '@_Class'>

export interface OperationSequence {
  '@_Class': 'PatchOperationFindMod'
  mods: Array<string>
  match: {
    '@_Class': 'PatchOperationSequence'
    operations: Array<Operation>
  }
}
