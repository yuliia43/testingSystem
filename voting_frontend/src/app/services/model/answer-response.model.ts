import {Question} from '../../question/question.model';
import {Answer} from '../../answer/answer.model';

export class AnswerResponse {
  questionId: bigint;
  userId: number;
  answer: any;

  constructor(questionId: bigint, answer: any, userId: number) {
    this.questionId = questionId;
    this.answer = answer;
    this.userId = userId;
  }

  public static create(question: Question, answer: Answer<any>, userId: number): AnswerResponse {
    return new AnswerResponse(question.id, answer.value, userId);
  }

}
