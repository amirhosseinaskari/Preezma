import styled from 'styled-components'
import { FlexBox } from '~styled/Flexbox'

export const Workout = styled(FlexBox).attrs({
  direction: 'column',
})`
  padding: 8px 0 8px 16px;
  border-bottom: var(--border-grey);

  :last-child {
    border-bottom: none;
  }
`

export const ExerciseInfo = styled(FlexBox).attrs({
  direction: 'column',
})`
  margin-left: 16px;
`

export const Exercise = styled(FlexBox).attrs({
  alignItems: 'center',
})`
  margin: 10px 0;
`
