export class Question {
  id: bigint;
  title: string;

  constructor(id: bigint = null, title: string = null) {
    this.id = id;
    this.title = title;
  }
}
