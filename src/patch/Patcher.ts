import type { Operation, OperationOption } from '../types/patch'
import { wrapArraysForXml } from '../helper'

export default class Patcher {
  private matches?: Array<string>
  private operations: Array<Operation> = [] // queue

  constructor(matches?: Array<string>) {
    this.matches = matches
  }

  static bundle(patchers: Array<Patcher>) {
    const operations = patchers.flatMap(({ matches, operations }: any) => {
      if (!matches) return operations

      return {
        '@_Class': 'PatchOperationFindMod',
        mods: matches,
        match: {
          '@_Class': 'PatchOperationSequence',
          operations,
        },
      }
    })

    return { Patch: { Operation: wrapArraysForXml(operations) } }
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
