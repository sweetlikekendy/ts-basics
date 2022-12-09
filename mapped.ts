console.log("hello")

// interface GenericIdentityFn<Type> {
//   (arg: Type): Type
// }

// function identity<Type>(arg: Type): Type {
//   return arg
// }

// let myIdentity: GenericIdentityFn<number> = identity
type Ppl = { age: number; name: string; alive: boolean }

type I2 = Ppl[keyof Ppl]
