import styled from 'styled-components'
import { Button } from '.'

export const ActionButton = styled(Button)`
  width: 74px;
  height: 48px;
`
ActionButton.defaultProps = {
  activeBackColor: 'var(--white-color)',
  border: '2px solid var(--theme-color)',
}
