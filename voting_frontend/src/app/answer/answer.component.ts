import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Answer} from './answer.model';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent {

  @Input()
  public answer: Answer<any>;
  @Input()
  public disabled: boolean;
  @Output()
  public select = new EventEmitter<Answer<any>>();

  public answerQuestion(answer: Answer<any>): void {
    this.select.emit(answer);
  }

}
