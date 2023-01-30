// can't instantiate abstract classes
abstract class StreetFighter {
  constructor() {}

  move() {}
  fight() {
    console.log(`${this.name} attacks with ${this.getSpecialAttack()}`)
  }

  abstract getSpecialAttack(): string
  abstract get name(): string
}

class Ryu extends StreetFighter {
  getSpecialAttack(): string {
    return "Hadoken"
  }

  get name(): string {
    return "Ryu"
  }
}

class ChunLi extends StreetFighter {
  getSpecialAttack(): string {
    return "Lightning Kick"
  }

  get name(): string {
    return "Chun Li"
  }
}

const ryu = new Ryu()

ryu.fight()

const chunLi = new ChunLi()

chunLi.fight()
