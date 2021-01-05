import { createGlobalStyle, keyframes } from 'styled-components'

const animeLeft = keyframes`
  to {
    opacity: 1;
    transform: initial;
  }
`

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    padding-top: 4rem;
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font-family: ${props => props.theme.types.primary};
    -webkit-font-smoothing: antialiased !important;
  }

  h1, h2, h3, h4, p {
    margin: 0px;
  }

  ul, li {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.text};
  }

  img {
    display: block;
    max-width: 100%;
  }

  button, input {
    display: block;
    font-size: 1rem; // 1rem == 16px
    font-family: ${props => props.theme.types.primary};
    color: ${props => props.theme.colors.text};
  }

  .container {
    max-width: 50rem;
    padding: 0 1rem;
    margin: 0 auto;
  }

  .title {
    font-family: ${props => props.theme.types.secondary};
    line-height: 1;
    font-size: 3rem;
    margin: 1rem 0;
    position: relative;
    z-index: 1;
  }

  .title::after {
    content: '';
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    background: #fb1;
    position: absolute;
    bottom: 5px;
    left: -5px;
    border-radius: .2rem;
    z-index: -1;
  }

  .anime-left {
    opacity: 0;
    transform: translateX(-20px);
    animation: ${animeLeft} .3s forwards;
  }
`
