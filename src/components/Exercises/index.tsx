import React from 'react'
import { IWorkout } from '~src/types/workout-list'
import { Text } from '~styled/Text'
import { FlexBox } from '~styled/Flexbox'
import { Image } from '~styled/Image'
import { Exercise, ExerciseInfo, Workout } from './style'

interface Props {
  workoutList: IWorkout[]
}

const Exercises: React.FC<Props> = ({ workoutList }) => {
  return (
    <div>
      {workoutList.length > 0 &&
        workoutList.map((workout, index) => (
          <Workout key={`${workout.id}-${workout.title}`}>
            <Text as='h3' scale='normal' weight='bold' margin='10px 0'>
              {workout.title}
            </Text>
            {workout.exercises.map(exercise => (
              <Exercise key={`${exercise.id}-${exercise.title}`}>
                <Image
                  mode='rounded'
                  width='64'
                  height='64'
                  src={exercise.photo}
                  alt={exercise.title}
                />
                <ExerciseInfo>
                  <Text
                    as='strong'
                    scale='large'
                    weight='bold'
                    margin='0 0 4px 0'
                  >
                    {exercise.title}
                  </Text>
                  <Text as='span' scale='small'>
                    {exercise.duration} sec
                  </Text>
                </ExerciseInfo>
              </Exercise>
            ))}
          </Workout>
        ))}
    </div>
  )
}

export default Exercises
