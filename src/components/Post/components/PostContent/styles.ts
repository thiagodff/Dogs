import styled, { keyframes } from 'styled-components'

import eyeIcon from '../../../../assets/eye-black.svg'

const scaleUp = keyframes`
  to {
    opacity: initial;
    transform: initial;
  }
`

export const Container = styled.div`
  margin: auto;
  height: 36rem;
  border-radius: 0.2rem;
  background: #fff;
  display: grid;
  grid-template-columns: 36rem 20rem;
  grid-template-rows: auto 1fr auto;
  overflow: hidden;
  opacity: 0;
  transform: scale(0.8);
  animation: ${scaleUp} 0.3s forwards;

  @media (max-width: 64rem) {
    height: auto;
    max-height: calc(100vh - 4rem);
    overflow-y: auto;
    grid-template-columns: minmax(20rem, 40rem);
  }
`

export const PostDetails = styled.div`
  padding: 2rem 2rem 0 2rem;

  .img {
    grid-row: 1 / 4;
  }

  .author {
    opacity: 0.5;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a:hover {
      text-decoration: underline;
    }

    .visualizations::before {
      content: '';
      display: inline-block;
      width: 16px;
      height: 10px;
      margin-right: 0.5rem;
      background: url(${eyeIcon}) center center;
    }
  }

  .attributes {
    display: flex;
    font-size: 1.125rem;
    font-weight: bold;
    margin-top: 1rem;
    margin-bottom: 2rem;

    li {
      margin-right: 2rem;
    }

    li::before {
      content: '';
      display: inline-block;
      height: 20px;
      margin-right: 0.5rem;
      position: relative;
      top: 3px;
      width: 2px;
      background: #333;
      margin-top: 5px;
    }
  }

  @media (max-width: 64rem) {
    .img {
      grid-row: 1;
    }
  }
`
