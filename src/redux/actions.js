export const QUESTION_ANSWER = 'QUESTION_ANSWER';

export function questionAnswer(index, answer) {
    return { type: QUESTION_ANSWER, payload: { index, answer } };
}
