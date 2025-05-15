export type InferenceForm = '演繹推論' | '根拠推論' | '論拠推論' | '非形式推論'

export type Problem = {
  major_term: string
  minor_term: string
  middle_term: string
  inference_form: InferenceForm
}

export const problems: Record<number, Problem> = {
  1: {
    major_term: '空を飛ぶ',
    minor_term: 'トキである',
    middle_term: '鳥である',
    inference_form: '演繹推論'
  },
  2: {
    major_term: '空を飛ぶ',
    minor_term: 'カラスである',
    middle_term: '鳥である',
    inference_form: '根拠推論'
  },
  3: {
    major_term: '空を飛ぶ',
    minor_term: 'カラスである',
    middle_term: '鳥である',
    inference_form: '論拠推論'
  },
  4: {
    major_term: '空を飛ぶ',
    minor_term: 'カラスである',
    middle_term: '鳥である',
    inference_form: '非形式推論'
  }
}
