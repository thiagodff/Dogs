import styled from 'styled-components'

export const CommentList = styled.ul`
  overflow-y: auto;
  word-break: break-word;
  padding: 0 1.5rem;
  margin: 0 0.5rem;

  &::-webkit-scrollbar {
    width: 6px;
    background-color: #eee;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: darkgrey;
  }

  li {
    margin-bottom: 0.5rem;
    line-height: 1.2;
  }
`
