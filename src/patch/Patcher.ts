import type { Operation, OperationOption } from '../types/patch'
import { wrapArraysForXml } from '../helper'

export default class Patcher {
  private matches?: Array<string>
  private operations: Array<Operation> = [] // queue

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

  add({ xpath, value }: OperationOption) {
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

  replace({ xpath, value }: OperationOption) {
    const operation: Operation = {
      '@_Class': 'PatchOperationReplace',
      xpath,
      value,
    }
    this.operations.push(operation)
  }
}
