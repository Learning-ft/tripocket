import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const globalStyle = createGlobalStyle`
  ${reset}
  *{
    box-sizing: border-box;
  }
  body {
        background-color: #e7e7e7;
  }
  ul>li{
    list-style: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`
