export interface Disappears {
  '@_Class': 'HediffCompProperties_Disappears'
  disappearsAfterTicks: number
  showRemainingTime: boolean
  canUseDecimalsShortForm: boolean
  requiredMentalState: string
  messageOnDisappear: string
  letterTextOnDisappear: string
  letterLabelOnDisappear: string
  /** @default true */
  sendLetterOnDisappearIfDead: boolean
  /** @default true */
  leaveFreshWounds: boolean
}
