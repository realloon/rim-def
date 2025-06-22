import type {
  int,
  float,
  ResearchProjectDefName,
  MemeDef,
  SoundDefName,
  EffecterDefName,
  ThingFilter,
  SkillRequirement,
  SkillDefName,
  WorkTypeDef,
  CustomName,
  ThingDefName,
} from '.'

type Skill = 'Crafting' | 'Intellectual'

export interface RecipeMakerProperties {
  /**
   * @todo MustTranslate
   */
  label: string

  /**
   * @default 1
   */
  productCount: int

  /**
   * @default 1
   */
  targetCountAdjustment: int

  /**
   * @default -1
   */
  bulkRecipeCount: int

  /**
   * @default true
   */
  useIngredientsForColor: boolean

  /**
   * @default -1
   */
  workAmount: int

  workSpeedStat: StatDefName

  efficiencyStat: StatDefName

  unfinishedThingDef: UnfinishedThingDefName

  defaultIngredientFilter: ThingFilter

  // skillRequirements: Array<SkillRequirement>
  skillRequirements: Partial<Record<Skill, number>>

  workSkill: SkillDefName

  /**
   * @default 1f
   */
  workSkillLearnPerTick: float

  requiredGiverWorkType: WorkTypeDef

  effectWorking: EffecterDefName

  soundWorking: SoundDefName

  recipeUsers: Array<RecipeUser>

  researchPrerequisite: ResearchProjectDefName

  memePrerequisitesAny: Array<MemeDef>

  researchPrerequisites: Array<ResearchProjectDefName>

  /**
   * @todo [NoTranslate]
   */
  factionPrerequisiteTags: Array<string>

  mechanitorOnlyRecipe: boolean

  fromIdeoBuildingPreceptOnly: boolean

  /**
   * Priority displayed in workbench recipe.
   * @default 99999
   */
  displayPriority: int
}

type StatDefName = 'GeneralLaborSpeed' | `${string}_${string}`

type RecipeUser = 'TableMachining' | CustomName

type UnfinishedThingDefName =
  | 'UnfinishedGun'
  | 'UnfinishedSculpture'
  | 'UnfinishedGun'
  | 'UnfinishedWeapon'
  | 'UnfinishedArmor'
  | 'UnfinishedTechArmor'
  | 'UnfinishedMetallicTechArmor'
  | 'UnfinishedApparel'
  | 'UnfinishedBelt'
  | 'UnfinishedPack'
  | 'UnfinishedComponent'
  | 'UnfinishedHealthItemProsthetic'
  | 'UnfinishedHealthItemBionic'
  | CustomName
