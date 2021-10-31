import styled from 'styled-components'

export type FontWeight = 'normal' | 'bold'
export type FontSize = 'small' | 'normal' | 'large' | 'xlarge' | 'xxlarge'

interface Text {
  font?: string
  scale?: FontSize
  weight?: FontWeight
  margin?: string
  padding?: string
  color?: string
}

export const Text = styled.p<Text>`
  margin: ${({ margin }) => (margin ? margin : '')};
  padding: ${({ padding }) => (padding ? padding : '')};
  color: ${({ color }) => (color ? color : '')};
  font-family: ${({ font }) => (font ? font : 'var(--theme-font)')};
  font-size: ${({ scale }) =>
    scale === 'small'
      ? 'var(--small-font-size)'
      : scale === 'normal'
      ? 'var(--normal-font-size)'
      : scale === 'large'
      ? 'var(--large-font-size)'
      : scale === 'xlarge'
      ? 'var(--xlarge-font-size)'
      : scale === 'xxlarge'
      ? 'var(--xxlarge-font-size)'
      : ''};
  font-weight: ${({ weight }) =>
    weight === 'normal'
      ? 'var(--normal-font-weight)'
      : weight === 'bold'
      ? 'var(--bold-font-weight)'
      : ''};
`

Text.defaultProps = {
  font: 'var(--theme-font)',
  scale: 'normal',
  weight: 'normal',
}
