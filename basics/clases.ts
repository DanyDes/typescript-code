class Animal {
  type: string;

  constructor(type: string) {
    this.type = type;
  }

  makeSound() {
    return `Some default sound`;
  }
}
