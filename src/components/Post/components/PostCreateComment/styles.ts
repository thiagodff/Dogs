import styled, { keyframes } from 'styled-components'

const bark = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const Container = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: stretch;
  margin: 1rem;
`

export const CommentField = styled.textarea`
  display: block;
  width: 100%;
  font-size: 1rem;
  font-family: ${props => props.theme.types.primary};
  resize: none;
  border: 1px solid #eee;
  padding: 0.5rem;
  background: #eee;
  transition: 0.2s;
  overflow: auto;

  &:focus,
  &:hover {
    outline: none;
    border-color: #fb1;
    background: #fff;
    box-shadow: 0 0 0 3px #fea;
  }
`

export const SendButton = styled.button`
  border: none;
  cursor: pointer;
  color: #333;
  background: transparent;
  font-size: 1rem;
  padding: 0 1rem;
  overflow: hidden;

  &:focus,
  &:hover {
    outline: 0;
  }

  &:focus svg,
  &:hover svg {
    path {
      fill: #fea;
      stroke: #fb1;
    }

    g {
      animation: ${bark} 0.6s infinite;
    }
  }
`
