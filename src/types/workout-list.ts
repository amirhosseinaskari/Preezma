export interface IExercise {
  id: string
  title: string
  duration: number
  video: string
  photo: string
  description: string
  isCompeleted: boolean
  isActive: boolean
}

export interface IWorkout {
  id: string
  title: string
  exercises: IExercise[]
  isActive: boolean
  isCompelete: boolean
  muscle_group: {
    name: string
    photo: string
  }
}
