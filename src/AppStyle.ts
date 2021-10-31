import styled from 'styled-components'
import { FlexBox } from './components/shared/Styled/Flexbox'

export const Container = styled(FlexBox)`
  box-sizing: border-box;
  min-height: 100vh;
  padding: 120px 0;
  background-image: url('/background/top-background.png'),
    url('/background/bottom-background.png');
  background-repeat: no-repeat;
  background-position: top left, bottom right;
`
