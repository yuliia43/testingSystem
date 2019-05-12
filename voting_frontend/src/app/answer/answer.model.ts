export class Answer<T> {
  name: string;
  value: T;
  style?: any;

  constructor(name: string, value: T, style?: any) {
    this.name = name;
    this.value = value;
    this.style = style;
  }
}
