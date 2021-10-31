import styled from 'styled-components'

export interface SVGIconProps {
  fill?: string
  stroke?: string
}
export const SVGIcon = styled.svg<SVGIconProps>`
  fill: ${({ fill }) => fill};
  stroke: ${({ stroke }) => stroke};
`
