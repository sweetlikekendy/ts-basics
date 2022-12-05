export function printToFile(text: string, callback: () => void): void {
  console.log(text)
  callback()
}

export type MutationFunction = (v: number) => number

export function mutateArray(
  numbers: number[],
  mutate: MutationFunction
): number[] {
  return numbers.map(mutate)
}

console.log(mutateArray([1, 20, 3], (v) => v * 10))

export const adderFunc = (val: number): ((val: number) => number) => {
  return (num: number) => val + num
}

const addOne = adderFunc(1)

console.log(addOne(55))
