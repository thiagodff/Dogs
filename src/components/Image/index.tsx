import React, { ImgHTMLAttributes, useRef, useState } from 'react'

import { Container, ImageSkeleton, SourceImage } from './styles'

type ImageProps = ImgHTMLAttributes<HTMLImageElement>

const Image: React.FC<ImageProps> = ({ ...props }) => {
  const imageRef = useRef<HTMLImageElement>(null)
  const [showSkeleton, setShowSkeleton] = useState(true)

  function handleLoadImage() {
    setShowSkeleton(false)

    if (imageRef.current) {
      imageRef.current.style.opacity = '1'
    }
  }

  return (
    <Container>
      {showSkeleton && <ImageSkeleton></ImageSkeleton>}
      <SourceImage ref={imageRef} onLoad={handleLoadImage} {...props} />
    </Container>
  )
}

export default Image
