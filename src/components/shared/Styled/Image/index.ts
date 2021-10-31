import React from 'react'
import styled from 'styled-components'

interface ImageProps {
  src: string
  alt: string
  width?: string
  maxWidth?: string
  height?: string
  border?: string
  mode?: 'rounded' | 'circle' | 'normal'
}

export const Image = styled.img<ImageProps>`
  max-width: ${({ maxWidth }) => maxWidth};
  border: ${({ border }) => border};
  border-radius: ${({ mode }) =>
    mode === 'rounded' ? '8px' : mode === 'circle' ? '50%' : '0'};
`
