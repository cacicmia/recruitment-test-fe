export interface Question {
  questionId: string
  questionType: 'text' | 'rating'
  label: string
  required: boolean
  attributes: any
}
