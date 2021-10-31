import React, { useEffect, useRef } from 'react'

interface Props {
  src: string
  width?: string
}

const Video: React.FC<Props> = ({ src, width = '100%' }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load()
    }
  }, [src])
  return (
    <video ref={videoRef} width={width} controls>
      <track src='/sample.vtt' kind='captions' label='English' />
      <source src={src} type='video/mp4' />
    </video>
  )
}

export default Video
