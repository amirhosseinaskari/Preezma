import styled from 'styled-components'
import { Image } from '~components/shared/Styled/Image'
import { Button } from '~styled/Button'
import { FlexBox } from '~styled/Flexbox'

export const CoverImage = styled(Image)`
  @media only screen and (max-width: 800px) {
    & {
      border-radius: 0;
    }
  }
`

export const Title = styled(FlexBox)`
  margin-left: 16px;
  border-bottom: var(--border-grey);
`

export const StartButtonContainer = styled(FlexBox).attrs({
  justify: 'center',
})`
  position: fixed;
  bottom: 32px;
  width: calc(100vw - 16px);
  max-width: 800px;
`
export const StartButton = styled(Button).attrs({
  activeBackColor: 'var(--theme-color)',
})`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 16px;
  box-shadow: 0px 16px 32px rgba(170, 0, 255, 0.24);
`
