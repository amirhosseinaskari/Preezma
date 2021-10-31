import React, { useEffect, useRef, useState } from 'react'
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from 'react-circular-progressbar'
import { Text } from '../shared/Styled/Text'

interface Props {
  exerciseTime: number
  isPaused: boolean
  pathColor: string
  next: () => void
  textColor: string
  reverse: boolean
  seconds: number
}

const Timer: React.FC<Props> = ({
  exerciseTime,
  isPaused,
  next,
  pathColor,
  textColor,
  reverse,
  seconds,
}) => {
  useEffect(() => {
    if (seconds === exerciseTime) {
      setTimeout(() => next(), 1000)
    }
  }, [seconds])
  return (
    <div
      style={{
        width: 128,
        height: 128,
      }}
    >
      <CircularProgressbarWithChildren
        value={
          reverse ? 100 - seconds * Math.round(100 / exerciseTime) : seconds
        }
        styles={buildStyles({
          // Rotation of path and trail, in number of turns (0-1)
          rotation: 0,

          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
          strokeLinecap: 'butt',

          // Text size
          textSize: '16px',

          // How long animation takes to go from one percentage to another, in seconds
          pathTransitionDuration: 0.5,

          // Can specify path transition in more detail, or remove it entirely
          // pathTransition: 'none',

          // Colors
          pathColor,
          trailColor: '#d6d6d6',
          backgroundColor: 'var(--teal-color)',
        })}
      >
        <Text scale='xxlarge' color={textColor} weight='bold'>
          {reverse
            ? exerciseTime - seconds >= 0
              ? exerciseTime - seconds
              : 0
            : seconds}
        </Text>
      </CircularProgressbarWithChildren>
    </div>
  )
}

export default Timer
