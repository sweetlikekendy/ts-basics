interface Cat {
  name: string
  breed: string
}

type ReadOnlyCat = Readonly<Cat>

function makeCat(name: string, breed: string): ReadOnlyCat {
  return { name, breed }
}

const cat = makeCat("silly", "tabbie")

const makeCoordinates = (
  x: number,
  y: number,
  z: number
): readonly number[] => {
  return [x, y, z]
}

const newPoint = makeCoordinates(5, 6, 7)

const coordinates = [1, 3, 5] as const
