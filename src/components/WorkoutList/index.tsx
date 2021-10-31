import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import {
  fetchList,
  selectAllList,
} from '~src/redux/reducers/workoutListReducer'
import { FlexBox } from '~styled/Flexbox'
import { Text } from '~styled/Text'
import Exercises from '../Exercises'
import { CoverImage, StartButton, StartButtonContainer, Title } from './style'
const WorkoutList: React.FC = () => {
  const { isLoading, workoutList } = useSelector(selectAllList)
  const history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchList())
  }, [])

  const onButtonClick = () => {
    const firstId = workoutList[0].exercises[0]?.id
    if (firstId) history.push(`/exercise?id=${firstId}`)
  }
  return (
    <FlexBox direction='column' alignItems='center'>
      <CoverImage
        alt='cover image'
        src='/image.png'
        mode='rounded'
        maxWidth='100%'
      />
      {!isLoading && workoutList.length > 0 && (
        <FlexBox width='100%' direction='column'>
          <Title direction='column'>
            <Text as='span' scale='small' padding='32px 0 0 0'>
              Day 1
            </Text>
            <Text as='h2' scale='xlarge' weight='bold' margin='6px 0'>
              Morning Flexibility Routine
            </Text>
            <Text as='span' scale='small' padding='0 0 24px 0'>
              Easy . 15 min . No equipment
            </Text>
          </Title>
          <Exercises workoutList={workoutList} />
          <StartButtonContainer>
            <StartButton
              onClick={onButtonClick}
              fontSize='normal'
              weight='bold'
            >
              Start Workout
            </StartButton>
          </StartButtonContainer>
        </FlexBox>
      )}
    </FlexBox>
  )
}

export default WorkoutList
