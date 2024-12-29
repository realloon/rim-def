import { wrapArraysForXml } from '../helper'

interface Operation {
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

type PatchOption = Omit<Required<Operation>, '@_Class'>

export default class Patcher {
  // Sequence
  private matches?: Array<string>
  private operations: Array<Operation> = []

  constructor(matches?: Array<string>) {
    this.matches = matches
  }

  static bundle(patcher: Patcher) {
    if (!patcher.matches) {
      return { Operation: wrapArraysForXml(patcher.operations) } // it is work.
    }

    // Use sequence.
    return wrapArraysForXml({
      Operation: {
        '@_Class': 'PatchOperationFindMod',
        mods: patcher.matches,
        match: {
          '@_Class': 'PatchOperationSequence',
          operations: patcher.operations,
        },
      },
    })
  }

  add({ xpath, value }: PatchOption) {
    const operation: Operation = {
      '@_Class': 'PatchOperationAdd',
      xpath,
      value,
    }
    this.operations.push(operation)
  }

  remove(xpath: string) {
    const operation: Operation = {
      '@_Class': 'PatchOperationRemove',
      xpath,
    }
    this.operations.push(operation)
  }

  replace({ xpath, value }: PatchOption) {
    const operation: Operation = {
      '@_Class': 'PatchOperationReplace',
      xpath,
      value,
    }
    this.operations.push(operation)
  }
}
