export default class ErrorRepository {
  constructor() {
    this.members = new Map([
      [0, 'Fatal error'],
      [1, 'No connect'],
      [2, 'Argument not found'],
      [3, 'Not enough memory'],
    ]);
  }

  translate(code) {
    return this.members.has(code) ? this.members.get(code) : 'Unknown error';
  }
}
