export const simpleStringState = (
  initial: string
): [() => string, (v: string) => void] => {
  let str: string = initial

  return [() => str, (val: string) => (str = val)]
}

const [strGetter, strSetter] = simpleStringState("hello")

console.log(strGetter())
strSetter("goodbye")
console.log(strGetter())
