import styled from 'styled-components'
import { Button } from '.'

export const CircleButton = styled(Button)`
  position: relative;
  width: ${({ width }) => (width ? width : '54px')};
  height: ${({ height }) => (height ? height : '54px')};
  border-radius: 50%;
`

CircleButton.defaultProps = {
  activeBackColor: 'var(--theme-color)',
  border: 'none',
}
