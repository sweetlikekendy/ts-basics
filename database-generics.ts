import { getPositionOfLineAndCharacter } from "typescript"

interface Database<T> {
  get(id: string): T
  set(id: string, value: T): void
}

interface Persistable {
  saveToString(): string
  restoreFromString(storedState: string): void
}

class InMemoryDatabase<T> implements Database<T> {
  protected db: Record<string, T> = {}

  get(id: string): T {
    return this.db[id]
  }
  set(id: string, value: T): void {
    this.db[id] = value
  }
}

class PersistentMemoryDB<T> extends InMemoryDatabase<T> implements Persistable {
  saveToString(): string {
    return JSON.stringify(this.db)
  }
  restoreFromString(storedState: string): void {
    this.db = JSON.parse(storedState)
  }
}

const myDB = new PersistentMemoryDB()

myDB.set("foo", "boo")

console.log(myDB.get("foo"))
console.log(myDB.saveToString())

// interface NewUser {
//   first: string
//   last: string
//   hobbies: string[]
//   id: string
// }

// type Keys = keyof NewUser
// type Values = NewUser[Keys]

// const updateUserByKeys = <T extends NewUser, K extends Keys, V extends Values>(
//   user: T,
//   keysToChange: K[],
//   values: V[]
// ): T => {
//   let updatedUser = { ...user }

//   for (let i = 0; i < keysToChange.length; i += 1) {
//     updatedUser = {
//       ...updatedUser,
//       [keysToChange[i]]: values[i],
//     }
//   }

//   return updatedUser
// }

// let user: NewUser = {
//   first: "bob",
//   last: "lol",
//   hobbies: ["biking", "skiing"],
//   id: "343k",
// }

// console.log(user)

// user = updateUserByKeys(user, ["first"], [["laser", "string"]])

// console.log(user)
