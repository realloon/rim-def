import type { Def } from '#types'

interface DefinedAttrs {
  '@_Name'?: string
  '@_ParentName'?: string
  '@_Inherit'?: 'True' | 'False'
}

type DefType = 'Thing' | 'Sound'

export class Defined {
  constructor(
    private type: DefType,
    public ctx: DefinedAttrs & Partial<Def> = {}
  ) {}

  static bundle(defined: Defined) {
    return {
      [defined.type]: defined.ctx,
    }
  }

  get defName() {
    return this.ctx.defName as string
  }
  set defName(value: string) {
    this.ctx.defName = value
  }

  label(value: Def['label']) {
    this.ctx.label = value
  }

  description(value: Def['description']) {
    this.ctx.description = value
  }

  descriptionHyperlinks(value: Def['descriptionHyperlinks']) {
    this.ctx.descriptionHyperlinks = value
  }
}

export class SoundDefined extends Defined {}
