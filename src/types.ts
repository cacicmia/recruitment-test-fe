export interface Question {
  questionId: string
  questionType: 'text' | 'rating'
  label: string
  required: boolean
  min?: number
  max?: number
}
