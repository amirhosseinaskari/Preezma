import styled from 'styled-components'
import { Button } from '~styled/Button'
import { FlexBox } from '~styled/Flexbox'

export const Container = styled(FlexBox)`
  width: 100%;
  max-width: 800px;
`

export const TimeContainer = styled.div`
  width: 128px;
  height: 128px;
`
export const ActionContainer = styled(FlexBox).attrs({
  justify: 'space-between',
  alignItems: 'center',
})`
  box-sizing: border-box;
  width: 100%;
  padding: 0 16px;
`

export const PauseButtonContainer = styled(FlexBox).attrs({
  justify: 'center',
})`
  position: fixed;
  bottom: 32px;
  width: calc(100vw - 16px);
  max-width: 800px;
`
export const PauseButton = styled(Button).attrs({
  activeBackColor: 'var(--theme-color)',
})`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 16px;
  margin-right: 16px;
  box-shadow: 0px 16px 32px rgba(170, 0, 255, 0.24);
`
