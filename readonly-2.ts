class Doggy {
  constructor(public readonly name: string, public age: number) {}
}

const lilDog = new Doggy("LD", 13)
console.log(lilDog.age)

class DogList {
  private dogs: Doggy[] = []

  static instance: DogList = new DogList()

  private constructor() {}

  static addDog(dog: Doggy) {
    DogList.instance.dogs.push(dog)
  }

  getDogs() {
    return this.dogs
  }
}

DogList.addDog(lilDog)
console.log(DogList.instance.getDogs())
