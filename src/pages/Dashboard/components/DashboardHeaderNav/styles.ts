import styled from 'styled-components'

export const Container = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  a,
  button {
    background: #eee;
    border-radius: 0.2rem;
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid transparent;
    transition: 0.1s;
    cursor: pointer;
  }

  a:hover,
  a:focus,
  button:hover,
  button:focus {
    background: #fff;
    box-shadow: 0 0 0 3px #eee;
    border-color: #333;
    outline: none;
  }

  a.active {
    background: #fff;
    box-shadow: 0 0 0 3px #fea;
    border-color: #fb1;

    svg > * {
      fill: #fb1;
    }
  }
`
