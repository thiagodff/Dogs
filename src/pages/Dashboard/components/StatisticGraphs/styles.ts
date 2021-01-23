import styled from 'styled-components'

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 3rem;

  .graph-item {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    border-radius: 0.2rem;
    display: grid;
    align-items: center;
    padding: 0.5rem;
  }

  .VictoryContainer {
    height: initial !important;
  }

  @media (max-width: 40rem) {
    grid-template-columns: 1fr;
  }
`

export const TotalAccess = styled.div`
  grid-column: 1 / 3;
  padding: 2rem;
  font-size: 2rem;

  @media (max-width: 40rem) {
    grid-column: 1;
  }
`
