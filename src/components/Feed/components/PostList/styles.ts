import styled from 'styled-components'

export const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
  justify-items: center;

  @media (max-width: 40rem) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const ContainerNoPost = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: center;

  h1 {
    font-size: 16px;
    color: #d3d3d3;
    font-weight: 500;
  }
`
