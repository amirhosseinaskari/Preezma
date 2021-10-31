import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import Timer from '~components/Timer'
import { useQuery } from '~src/hooks/useQuery'
import { useTimer } from '~src/hooks/useTimer'
import reducer, {
  fetchList,
  selectAllList,
} from '~src/redux/reducers/workoutListReducer'
import { IExercise } from '~src/types/workout-list'
import { FlexBox } from '~styled/Flexbox'
import { Text } from '~styled/Text'
import { ActionButton } from '~styled/Button/action-btn'
import Video from '../shared/Video'
import {
  ActionContainer,
  Container,
  PauseButton,
  PauseButtonContainer,
} from './style'

enum Step {
  GET_READY = 'GET_READY',
  EXERCISE_STARTED = 'EXERCISE_STARTED',
  COMPELETED = 'COMPELETED',
}

const Exercise: React.FC = () => {
  const query = useQuery()
  const dispatch = useDispatch()
  const history = useHistory()
  const { workoutList } = useSelector(selectAllList)
  const [exercise, setExercise] = useState<IExercise | null>(null)
  const [nextExercise, setNextExercise] = useState<IExercise | null>(null)
  const [prevExercise, setPrevExercise] = useState<IExercise | null>(null)
  const [isPaused, setIsPaused] = useState<boolean>(false)
  const [step, setStep] = useState<Step>(Step.GET_READY)
  const { seconds, start, stop, pause } = useTimer({})

  const next = useCallback(() => {
    stop()
    if (step === Step.GET_READY) {
      start()
      setStep(Step.EXERCISE_STARTED)
    } else if (step === Step.EXERCISE_STARTED && nextExercise) {
      start()
      setStep(Step.GET_READY)
      setExercise(nextExercise)
      history.push(`/exercise?id=${nextExercise.id}`)
    } else {
      history.push(`/compeleted`)
    }
  }, [step, exercise])

  const prev = useCallback(() => {
    stop()
    if (prevExercise) {
      start()
      setStep(Step.GET_READY)
      setExercise(prevExercise)
      history.push(`/exercise?id=${prevExercise.id}`)
    }
  }, [step, exercise])

  useEffect(() => {
    if (workoutList) {
      workoutList.forEach(item => {
        const index = item.exercises.findIndex(
          ex => Number(ex.id) === Number(query.get('id') || -1)
        )
        if (index > -1) {
          setExercise(item.exercises[index])

          if (item.exercises[index + 1]) {
            setNextExercise(item.exercises[index + 1])
          } else {
            setNextExercise(null)
          }

          if (item.exercises[index - 1]) {
            setPrevExercise(item.exercises[index - 1])
          } else {
            setPrevExercise(null)
          }
        }

        return
      })
    }
  }, [workoutList, query])

  useEffect(() => {
    if (workoutList.length < 1) dispatch(fetchList())
  }, [])

  const onPauseButtonClick = () => {
    if (isPaused) {
      start()
    } else {
      pause()
    }
    setIsPaused(!isPaused)
  }

  useEffect(() => {
    if (exercise) start()
  }, [exercise])

  return (
    <Container>
      {exercise && (
        <FlexBox direction='column' alignItems='center' width='100%'>
          <FlexBox justify='center' width='100%'>
            {step === Step.GET_READY ? (
              <Text scale='xlarge' weight='bold'>
                Get Ready
              </Text>
            ) : (
              <Text scale='xlarge' weight='bold'>
                {exercise.title}
              </Text>
            )}
          </FlexBox>
          <ActionContainer>
            {step === Step.EXERCISE_STARTED ? (
              <ActionButton color='var(--normal-color)' onClick={() => prev()}>
                Prev
              </ActionButton>
            ) : (
              <div style={{ width: 74 }}></div>
            )}
            <Timer
              reverse={true}
              next={next}
              seconds={seconds}
              exerciseTime={step === Step.GET_READY ? 5 : exercise.duration}
              pathColor={
                step === Step.GET_READY
                  ? 'var(--teal-color)'
                  : 'var(--pink-color)'
              }
              textColor={
                step === Step.GET_READY
                  ? 'var(--teal-color)'
                  : 'var(--pink-color)'
              }
              isPaused={isPaused}
            />
            <ActionButton color='var(--normal-color)' onClick={() => next()}>
              {step === Step.GET_READY ? 'Skip' : 'Next'}
            </ActionButton>
          </ActionContainer>
          <FlexBox width='100%' style={{ marginTop: '32px' }}>
            <Video src={exercise.video} />
          </FlexBox>
          {step === Step.EXERCISE_STARTED && (
            <PauseButtonContainer>
              <PauseButton
                onClick={onPauseButtonClick}
                fontSize='normal'
                weight='bold'
              >
                {isPaused ? 'Resume' : 'Pause'}
              </PauseButton>
            </PauseButtonContainer>
          )}
        </FlexBox>
      )}
    </Container>
  )
}

export default Exercise
