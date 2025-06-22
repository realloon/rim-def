import {
  AsymmetricLinkData,
  AttachPoint,
  Color,
  DamageGraphicData,
  float,
  Graphic,
  int,
  LinkDrawerType,
  LinkFlags,
  ShaderParameter,
  ShaderTypeDef,
  ShadowData,
  System,
  Vector2,
  Vector3,
} from '.'

export interface GraphicData {
  /**
   * @todo [NoTranslate]
   */
  name: string

  /**
   * @todo [NoTranslate]
   */
  texPath: `${string}/${string}`

  /**
   * @todo [NoTranslate]
   */
  maskPath: string

  graphicClass: 'Graphic_Single'

  shaderType: ShaderTypeDef

  shaderParameters: Array<ShaderParameter>

  /**
   * @default Color.white
   */
  color: Color

  /**
   * @default Color.white
   */
  colorTwo: Color

  /**
   * @default Vector2.one
   */
  drawSize: Vector2

  /**
   * @default Vector3.zero
   */
  drawOffset: Vector3

  drawOffsetNorth: Vector3 | undefined

  drawOffsetEast: Vector3 | undefined

  drawOffsetSouth: Vector3 | undefined

  drawOffsetWest: Vector3 | undefined

  onGroundRandomRotateAngle: float

  /**
   * @default true
   */
  drawRotated: boolean

  /**
   * @default true
   */
  allowFlip: boolean

  flipExtraRotation: float

  renderInstanced: boolean

  /**
   * @default true
   */
  allowAtlasing: boolean

  renderQueue: int

  overlayOpacity: float

  attachments: Array<GraphicData>

  attachPoints: Array<AttachPoint>

  addTopAltitudeBias: boolean

  ignoreThingDrawColor: boolean

  maxSnS: Vector2

  offsetSnS: Vector2

  shadowData: ShadowData

  damageData: DamageGraphicData

  linkType: LinkDrawerType

  linkFlags: LinkFlags

  asymmetricLink: AsymmetricLinkData

  /**
   * @default [NoTranslate]
   */
  cornerOverlayPath: string

  /**
   * @todo [Unsaved(false)]
   */
  cachedGraphic: Graphic
}
