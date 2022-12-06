interface User {
  id: string
  name: string
  email?: string
}

type MyUserOptionals = Partial<User>

const merge = (obj1: User, overrides: MyUserOptionals): User => {
  return {
    ...obj1,
    ...overrides,
  }
}

console.log(merge({ id: "adf3", name: "bob" }, { name: "bill" }))

type UserWithoutID = Omit<User, "id">

const mapByID = (items: User[]): Record<User["id"], UserWithoutID> => {
  return items.reduce((a, v) => {
    const { id, ...other } = v
    return {
      ...a,
      [id]: { ...other },
    }
  }, {})
}

console.log(
  mapByID([
    { id: "k", name: "bob", email: "a@b.com" },
    { id: "c", name: "cat", email: "cc@bb.com" },
  ])
)
