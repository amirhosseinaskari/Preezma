import { useCallback, useState } from 'react'
import { interval } from './interval'

const useSecond = interval(1000)

export const useTimer = ({
  initialSeconds = 0,
  running = true,
}: {
  initialSeconds?: number
  running?: boolean
}) => {
  const [seconds, setSeconds] = useState<number>(initialSeconds)
  const [isPaused, setIsPaused] = useState<boolean>(!running)
  const tick = useCallback(
    () => (!isPaused ? setSeconds(seconds => seconds + 1) : undefined),
    [isPaused]
  )

  const start = () => setIsPaused(false)
  const pause = () => setIsPaused(true)
  const reset = () => setSeconds(0)
  const stop = () => {
    pause()
    reset()
  }

  useSecond(tick)

  return { pause, reset, isPaused, seconds, start, stop }
}
