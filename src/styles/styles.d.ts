/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components'

import theme from './theme'

export type Theme = typeof theme // cria a tapagem baseada no theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
