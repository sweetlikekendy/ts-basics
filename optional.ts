interface User {
  email: string
  name?: {
    first?: string
    last?: string
  }
}

export const getName = (input: User): string => {
  return `${input?.name?.first ?? "first"} ${input?.name?.last ?? "last"}`
}

console.log(
  getName({
    email: "kendy@",
  })
)
