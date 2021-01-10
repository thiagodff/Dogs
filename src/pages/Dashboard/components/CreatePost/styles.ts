import styled, { css } from 'styled-components'

interface ImagePreviewProps {
  imgPreview: string
}

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;

  .img-upload {
    margin-bottom: 1rem;
  }
`

export const ImagePreviewWrapper = styled.div<ImagePreviewProps>`
  ${props => css`
    .image-preview {
      background: url(${props.imgPreview});
      background-size: cover;
      border-radius: 1rem;
      background-position: center center;

      &::after {
        content: '';
        display: block;
        height: 0px;
        padding-bottom: 100%;
      }
    }
  `}
`
