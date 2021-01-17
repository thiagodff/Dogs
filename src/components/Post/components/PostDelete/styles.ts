import styled from 'styled-components'

export const ButtonDelete = styled.button`
  background: #ddd;
  padding: 0.3rem 0.6rem;
  line-height: 1;
  border: 1px solid transparent;
  font-size: 0.875rem;
  font-family: ${props => props.theme.types.primary};
  cursor: pointer;
  border-radius: 0.4rem;
  transition: 0.1s;

  &:focus,
  &:hover {
    outline: none;
    background: #fff;
    box-shadow: 0 0 3px #eee;
    border-color: #333;
  }
`
