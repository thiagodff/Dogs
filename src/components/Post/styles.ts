import styled from 'styled-components'

export const Container = styled.section`
  > div {
    grid-template-columns: 1fr;
    height: auto;

    > * {
      padding: 0;
      margin-left: 0;
    }

    .img {
      grid-row: 1;
      border-radius: 0.4rem;
      overflow: hidden;
    }

    .details {
      padding: 1rem 0px 0px 0px;
    }
  }
`
