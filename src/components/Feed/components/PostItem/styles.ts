import styled from 'styled-components'

import eyeIcon from '../../../../assets/eye.svg'

export const Container = styled.li`
  &:nth-child(2) {
    grid-column: 2 / 4;
    grid-row: span 2;
  }

  @media (max-width: 40rem) {
    &:nth-child(2) {
      grid-column: initial;
      grid-row: initial;
    }
  }

  display: grid;
  border-radius: 0.2rem;
  overflow: hidden;
  cursor: pointer;

  img {
    grid-area: 1 / 1;
  }

  .visualizations {
    grid-area: 1 / 1;
    background: rgba(0, 0, 0, 0.3);
    font-size: 1rem;
    color: #fff;
    text-align: center;
    display: none;

    &::before {
      content: '';
      width: 16px;
      height: 10px;
      display: inline-block;
      margin-right: 0.25rem;
      background: url(${eyeIcon}) no-repeat;
    }
  }

  &:hover .visualizations {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
