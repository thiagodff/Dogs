import styled from 'styled-components'

import loginImg from '../../assets/login.jpg'

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  gap: 2rem;

  &::before {
    content: '';
    display: block;
    background: url(${loginImg}) no-repeat center center;
    background-size: cover;
  }

  .content-wrapper {
    max-width: 30rem;
    padding: 1rem;
  }

  @media (max-width: 40rem) {
    grid-template-columns: 1fr;

    &::before {
      display: none;
    }

    .content-wrapper {
      max-width: 100%;
    }
  }
`
